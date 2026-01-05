import db from "../models";
import { PayOS } from "@payos/node";

const payos = new PayOS({
  clientId: process.env.PAYOS_CLIENT_ID as string,
  apiKey: process.env.PAYOS_API_KEY as string,
  checksumKey: process.env.PAYOS_CHECKSUM_KEY as string,
});

const toVnd = (value: number) => Math.round(value);

export const createPaymentLink = (
  userId: number,
  courseId: number,
  couponCode?: string,
  discountPercent?: number
) =>
  new Promise(async (resolve, reject) => {
    try {
      const course = await db.Course.findByPk(courseId);
      if (!course) {
        resolve({
          err: 1,
          mess: "Khóa học không tồn tại",
        });
        return;
      }
      const courseData = course.get({ plain: true });
      const baseAmount = toVnd(
        courseData.price * (1 - (courseData.discount || 0) / 100)
      );
      const extraDiscount =
        discountPercent && discountPercent > 0 ? discountPercent : 0;
      const finalAmount = toVnd(baseAmount * (1 - extraDiscount / 100));

      const orderCode = Date.now();
      const description = `${courseData.title}`.slice(0, 25);
      const clientUrl = process.env.CLIENT_URL || "http://localhost:3000";
      const returnUrl = `${clientUrl}/payment/success?orderCode=${orderCode}`;
      const cancelUrl = `${clientUrl}/payment/cancel?orderCode=${orderCode}`;

      const paymentLink = await payos.paymentRequests.create({
        orderCode,
        amount: finalAmount,
        description,
        returnUrl,
        cancelUrl,
        items: [
          {
            name: courseData.title,
            quantity: 1,
            price: finalAmount,
          },
        ],
      });

      const newOrder = await db.Order.create({
        user_id: userId,
        course_id: courseId,
        order_code: String(orderCode),
        amount: finalAmount,
        status: "PENDING",
        payment_link_id: paymentLink.paymentLinkId || null,
        checkout_url: paymentLink.checkoutUrl || null,
        description,
        coupon_code: couponCode || null,
        discount_percent: extraDiscount,
      });

      resolve({
        err: 0,
        mess: "Tạo liên kết thanh toán thành công",
        data: {
          order: newOrder,
          checkoutUrl: paymentLink.checkoutUrl,
          paymentLinkId: paymentLink.paymentLinkId,
        },
      });
    } catch (error) {
      reject(error);
    }
  });

export const verifyWebhook = (payload: any) =>
  new Promise(async (resolve, reject) => {
    try {
      const result: any = await payos.webhooks.verify(payload);
      const info = result?.data;
      const success = result?.success === true;
      if (!success || !info?.orderCode) {
        resolve({
          err: 1,
          mess: "Xác minh webhook thất bại",
        });
        return;
      }
      const order = await db.Order.findOne({
        where: { order_code: String(info.orderCode) },
      });
      if (!order) {
        resolve({
          err: 1,
          mess: "Không tìm thấy đơn hàng",
        });
        return;
      }
      await order.update({
        status: "PAID",
        paid_at: new Date(),
      });
      resolve({
        err: 0,
        mess: "Cập nhật trạng thái thanh toán thành công",
      });
    } catch (error) {
      reject(error);
    }
  });

export const getOrderStatus = (userId: number, orderCode: string) =>
  new Promise(async (resolve, reject) => {
    try {
      const order = await db.Order.findOne({
        where: { order_code: orderCode, user_id: userId },
        include: [
          {
            model: db.Course,
            as: "course",
            attributes: ["id", "title", "price", "discount"],
          },
        ],
      });
      resolve({
        err: order ? 0 : 1,
        mess: order
          ? "Lấy trạng thái đơn hàng thành công"
          : "Không tìm thấy đơn hàng",
        data: order,
      });
    } catch (error) {
      reject(error);
    }
  });
