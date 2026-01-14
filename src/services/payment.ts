import db from "../models";
import { PayOS } from "@payos/node";
import nodemailer from "nodemailer";

const payos = new PayOS({
  clientId: process.env.PAYOS_CLIENT_ID as string,
  apiKey: process.env.PAYOS_API_KEY as string,
  checksumKey: process.env.PAYOS_CHECKSUM_KEY as string,
});

const toVnd = (value: number) => Math.round(value);

const COUPONS: Record<string, { percent: number }> = {
  TECH10: { percent: 10 },
};

const isGmail = (value: string) => /@gmail\.com$/i.test(value.trim());
const isTradingViewUsername = (value: string) =>
  /^[A-Za-z0-9_]{3,30}$/.test(value.trim());

const getUsdToVndRate = () => {
  const raw = Number(process.env.USD_TO_VND || 25000);
  return Number.isFinite(raw) && raw > 0 ? raw : 25000;
};

const getBotCatalogItem = async (code: string) => {
  try {
    const record = await db.CourseBuyTrade?.findOne?.({
      where: { code, status: "ACTIVE" },
    });
    if (record) {
      const plain = record.get({ plain: true });
      return {
        name: String(plain.name),
        monthlyUsd: Number(plain.monthly_usd),
        yearlyUsd: Number(plain.yearly_usd),
      };
    }
  } catch {}
  return null;
};

const sendBuyBotEmail = async (payload: {
  to: string;
  productName: string;
  plan: "monthly" | "yearly";
  tradingViewUsername: string;
  activationAt: Date;
  orderCode: string;
  amountVnd: number;
}) => {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || 0);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const from = process.env.SMTP_FROM || user;

  if (!host || !port || !user || !pass || !from) return;

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });

  const viDate = payload.activationAt.toLocaleString("vi-VN", {
    timeZone: "Asia/Ho_Chi_Minh",
  });

  const subject = `Tech Global: Xác nhận thanh toán bot ${payload.productName}`;
  const text = [
    `Thanh toán thành công.`,
    `Đơn hàng: ${payload.orderCode}`,
    `Sản phẩm: ${payload.productName}`,
    `Gói: ${payload.plan === "monthly" ? "Theo tháng" : "Theo năm"}`,
    `TradingView: ${payload.tradingViewUsername}`,
    `Số tiền: ${payload.amountVnd.toLocaleString("vi-VN")}đ`,
    `Thời gian dự kiến gắn bot vào TradingView: ${viDate}`,
    ``,
    `Nếu bạn cần hỗ trợ, vui lòng phản hồi email này.`,
  ].join("\n");

  await transporter.sendMail({
    from,
    to: payload.to,
    subject,
    text,
  });
};

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

export const createBotPaymentLink = (payload: {
  userId: number;
  productId: string;
  plan: "monthly" | "yearly";
  email: string;
  tradingViewUsername: string;
  couponCode?: string;
}) =>
  new Promise(async (resolve, reject) => {
    try {
      const product = await getBotCatalogItem(payload.productId);
      if (!product) {
        resolve({ err: 1, mess: "Sản phẩm bot không tồn tại" });
        return;
      }
      if (payload.plan !== "monthly" && payload.plan !== "yearly") {
        resolve({ err: 1, mess: "Gói không hợp lệ" });
        return;
      }
      if (!payload.email || !isGmail(payload.email)) {
        resolve({ err: 1, mess: "Email phải là Gmail" });
        return;
      }
      if (
        !payload.tradingViewUsername ||
        !isTradingViewUsername(payload.tradingViewUsername)
      ) {
        resolve({ err: 1, mess: "Tên tài khoản TradingView không hợp lệ" });
        return;
      }

      const couponKey = (payload.couponCode || "").trim().toUpperCase();
      const couponMeta = couponKey ? COUPONS[couponKey] : undefined;
      if (couponKey && !couponMeta) {
        resolve({ err: 1, mess: "Mã giảm giá không tồn tại" });
        return;
      }

      const usd =
        payload.plan === "monthly" ? product.monthlyUsd : product.yearlyUsd;
      const baseAmount = toVnd(usd * getUsdToVndRate());
      const discountPercent = couponMeta?.percent || 0;
      const finalAmount = toVnd(baseAmount * (1 - discountPercent / 100));

      const orderCode = Date.now();
      const description = `BOT ${product.name}`.slice(0, 25);
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
            name: `${product.name} (${payload.plan})`.slice(0, 25),
            quantity: 1,
            price: finalAmount,
          },
        ],
      });

      const newOrder = await db.BuyBot.create({
        user_id: payload.userId,
        order_code: String(orderCode),
        product_id: payload.productId,
        plan: payload.plan,
        email: payload.email.trim(),
        tradingview_username: payload.tradingViewUsername.trim(),
        amount: finalAmount,
        status: "PENDING",
        payment_link_id: paymentLink.paymentLinkId || null,
        checkout_url: paymentLink.checkoutUrl || null,
        description,
        coupon_code: couponKey || null,
        discount_percent: discountPercent,
      });

      resolve({
        err: 0,
        mess: "Tạo liên kết thanh toán bot thành công",
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
      const orderCode = String(info.orderCode);

      const order = await db.Order.findOne({
        where: { order_code: orderCode },
      });
      if (order) {
        if (order.status !== "PAID") {
          await order.update({ status: "PAID", paid_at: new Date() });
        }
        resolve({ err: 0, mess: "Cập nhật trạng thái thanh toán thành công" });
        return;
      }

      const botOrder = await db.BuyBot.findOne({
        where: { order_code: orderCode },
      });
      if (!botOrder) {
        resolve({ err: 1, mess: "Không tìm thấy đơn hàng" });
        return;
      }

      const now = new Date();
      const activationMinutes = Number(
        process.env.BOT_ACTIVATION_MINUTES || 15
      );
      const activationAt = new Date(
        now.getTime() +
          (Number.isFinite(activationMinutes) && activationMinutes > 0
            ? activationMinutes
            : 15) *
            60 *
            1000
      );

      if (botOrder.status !== "PAID") {
        await botOrder.update({
          status: "PAID",
          paid_at: now,
          activation_at: botOrder.activation_at || activationAt,
        });
      }

      if (!botOrder.email_sent_at) {
        const product = await getBotCatalogItem(String(botOrder.product_id));
        try {
          await sendBuyBotEmail({
            to: String(botOrder.email),
            productName: product?.name || String(botOrder.product_id),
            plan: botOrder.plan,
            tradingViewUsername: String(botOrder.tradingview_username),
            activationAt: botOrder.activation_at || activationAt,
            orderCode,
            amountVnd: Number(botOrder.amount || 0),
          });
          await botOrder.update({ email_sent_at: new Date() });
        } catch (e: any) {}
      }

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

export const getBotOrderStatus = (userId: number, orderCode: string) =>
  new Promise(async (resolve, reject) => {
    try {
      const order = await db.BuyBot.findOne({
        where: { order_code: orderCode, user_id: userId },
      });
      resolve({
        err: order ? 0 : 1,
        mess: order
          ? "Lấy trạng thái đơn hàng bot thành công"
          : "Không tìm thấy đơn hàng",
        data: order,
      });
    } catch (error) {
      reject(error);
    }
  });

export const getBotProducts = () =>
  new Promise(async (resolve, reject) => {
    try {
      const records = await db.CourseBuyTrade?.findAll?.({
        where: { status: "ACTIVE" },
        order: [["id", "ASC"]],
      });

      const items: Array<{
        code: string;
        name: string;
        monthlyUsd: number;
        yearlyUsd: number;
        subtitle?: string | null;
        highlights?: string[] | null;
      }> =
        Array.isArray(records) && records.length
          ? records.map((r: any) => {
              const plain = r.get({ plain: true });
              return {
                code: String(plain.code),
                name: String(plain.name),
                monthlyUsd: Number(plain.monthly_usd),
                yearlyUsd: Number(plain.yearly_usd),
                subtitle: plain.subtitle ?? null,
                highlights: plain.highlights ?? null,
              };
            })
          : [];

      resolve({
        err: 0,
        mess: "Lấy danh sách gói bot trade thành công",
        data: items,
      });
    } catch (error) {
      reject(error);
    }
  });
