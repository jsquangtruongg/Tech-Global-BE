import db from "../models";
import { Op } from "sequelize";

const normalizePlan = (value: any) => {
  const v = String(value || "").toLowerCase();
  if (v === "monthly" || v === "yearly") return v;
  return null;
};

const normalizeStatus = (value: any) => {
  const v = String(value || "").toUpperCase();
  if (v === "PENDING" || v === "PAID" || v === "CANCELED") return v;
  return null;
};

export const getMyBotOrders = (userId: number, query: any) =>
  new Promise(async (resolve, reject) => {
    try {
      const { page, limit, status } = query || {};
      const where: any = { user_id: userId };

      const st = normalizeStatus(status);
      if (st) where.status = st;

      const fLimit = Number(limit) > 0 ? Number(limit) : 20;
      const fPage = Number(page) > 0 ? Number(page) : 1;
      const offset = (fPage - 1) * fLimit;

      const { rows, count } = await db.BuyBot.findAndCountAll({
        where,
        limit: fLimit,
        offset,
        order: [["id", "DESC"]],
      });

      resolve({
        err: 0,
        mess: "Lấy danh sách đơn hàng bot thành công",
        data: rows,
        meta: { page: fPage, limit: fLimit, total: count },
      });
    } catch (error) {
      reject(error);
    }
  });

export const getAllBotOrders = (query: any) =>
  new Promise(async (resolve, reject) => {
    try {
      const { page, limit, status, plan, user_id, product_id, order_code, q } =
        query || {};
      const where: any = {};

      const st = normalizeStatus(status);
      if (st) where.status = st;

      const pl = normalizePlan(plan);
      if (pl) where.plan = pl;

      if (user_id) where.user_id = Number(user_id);
      if (product_id) where.product_id = String(product_id);
      if (order_code) where.order_code = String(order_code);

      if (q) {
        where[Op.or] = [
          { order_code: { [Op.substring]: String(q) } },
          { email: { [Op.substring]: String(q) } },
          { tradingview_username: { [Op.substring]: String(q) } },
          { product_id: { [Op.substring]: String(q) } },
        ];
      }

      const fLimit = Number(limit) > 0 ? Number(limit) : 20;
      const fPage = Number(page) > 0 ? Number(page) : 1;
      const offset = (fPage - 1) * fLimit;

      const { rows, count } = await db.BuyBot.findAndCountAll({
        where,
        limit: fLimit,
        offset,
        order: [["id", "DESC"]],
        include: [
          {
            model: db.User,
            as: "user",
            attributes: ["id", "name", "email", "phone"],
          },
        ],
      });

      resolve({
        err: 0,
        mess: "Lấy danh sách đơn hàng bot thành công",
        data: rows,
        meta: { page: fPage, limit: fLimit, total: count },
      });
    } catch (error) {
      reject(error);
    }
  });

export const getBotOrderDetail = (id: number) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.BuyBot.findByPk(id, {
        include: [
          {
            model: db.User,
            as: "user",
            attributes: ["id", "name", "email", "phone"],
          },
        ],
      });
      resolve({
        err: response ? 0 : 1,
        mess: response
          ? "Lấy chi tiết đơn hàng bot thành công"
          : "Không tìm thấy đơn hàng bot",
        data: response,
      });
    } catch (error) {
      reject(error);
    }
  });

export const updateBotOrder = (id: number, payload: any) =>
  new Promise(async (resolve, reject) => {
    try {
      const order = await db.BuyBot.findByPk(id);
      if (!order) {
        resolve({ err: 1, mess: "Không tìm thấy đơn hàng bot" });
        return;
      }

      const next: any = {};

      if (payload?.status !== undefined) {
        const st = normalizeStatus(payload.status);
        if (!st) {
          resolve({ err: 1, mess: "Trạng thái không hợp lệ" });
          return;
        }
        next.status = st;
        if (st === "PAID" && !order.paid_at) next.paid_at = new Date();
      }

      if (payload?.activation_at !== undefined) {
        const dt = new Date(payload.activation_at);
        if (Number.isNaN(dt.getTime())) {
          resolve({ err: 1, mess: "activation_at không hợp lệ" });
          return;
        }
        next.activation_at = dt;
      }

      if (payload?.email_sent_at !== undefined) {
        const dt = new Date(payload.email_sent_at);
        if (Number.isNaN(dt.getTime())) {
          resolve({ err: 1, mess: "email_sent_at không hợp lệ" });
          return;
        }
        next.email_sent_at = dt;
      }

      await order.update(next);

      resolve({
        err: 0,
        mess: "Cập nhật đơn hàng bot thành công",
        data: order,
      });
    } catch (error) {
      reject(error);
    }
  });

export const deleteBotOrder = (id: number) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.BuyBot.destroy({ where: { id } });
      resolve({
        err: response > 0 ? 0 : 1,
        mess: response > 0 ? "Xóa đơn hàng bot thành công" : "Không tìm thấy đơn hàng bot",
      });
    } catch (error) {
      reject(error);
    }
  });

