import db from "../models";
import { Op } from "sequelize";

export const getActiveBotProducts = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.CourseBuyTrade.findAll({
        where: { status: "ACTIVE" },
        order: [["id", "ASC"]],
      });

      resolve({
        err: 0,
        mess: "Lấy danh sách gói bot trade thành công",
        data: response,
      });
    } catch (error) {
      reject(error);
    }
  });

export const getAllBotProducts = (query: any) =>
  new Promise(async (resolve, reject) => {
    try {
      const { page, limit, q, status } = query || {};
      const where: any = {};

      if (status) where.status = String(status);
      if (q) {
        where[Op.or] = [
          { code: { [Op.substring]: String(q) } },
          { name: { [Op.substring]: String(q) } },
        ];
      }

      const fLimit = Number(limit) > 0 ? Number(limit) : 20;
      const fPage = Number(page) > 0 ? Number(page) : 1;
      const offset = (fPage - 1) * fLimit;

      const { rows, count } = await db.CourseBuyTrade.findAndCountAll({
        where,
        limit: fLimit,
        offset,
        order: [["id", "DESC"]],
      });

      resolve({
        err: 0,
        mess: "Lấy danh sách gói bot thành công",
        data: rows,
        meta: { page: fPage, limit: fLimit, total: count },
      });
    } catch (error) {
      reject(error);
    }
  });

export const getBotProductDetail = (id: number) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.CourseBuyTrade.findByPk(id);
      resolve({
        err: response ? 0 : 1,
        mess: response
          ? "Lấy chi tiết gói bot thành công"
          : "Không tìm thấy gói bot",
        data: response,
      });
    } catch (error) {
      reject(error);
    }
  });

export const createBotProduct = (payload: any) =>
  new Promise(async (resolve, reject) => {
    try {
      const {
        code,
        name,
        subtitle = null,
        highlights = null,
        monthly_usd,
        yearly_usd,
        status = "ACTIVE",
        image = null,
        is_popular = false,
        rating = 5.0,
        profit_display = null,
        drawdown_display = null,
        asset_type = null,
      } = payload || {};

      const [record, created] = await db.CourseBuyTrade.findOrCreate({
        where: { code },
        defaults: {
          code,
          name,
          subtitle,
          highlights,
          monthly_usd,
          yearly_usd,
          status,
          image,
          is_popular,
          rating,
          profit_display,
          drawdown_display,
          asset_type,
        },
      });

      resolve({
        err: created ? 0 : 1,
        mess: created ? "Tạo gói bot thành công" : "Mã gói bot đã tồn tại",
        data: record,
      });
    } catch (error) {
      reject(error);
    }
  });

export const updateBotProduct = (id: number, payload: any) =>
  new Promise(async (resolve, reject) => {
    try {
      const record = await db.CourseBuyTrade.findByPk(id);
      if (!record) {
        resolve({ err: 1, mess: "Không tìm thấy gói bot" });
        return;
      }

      const updatable: any = {};
      const keys = [
        "code",
        "name",
        "subtitle",
        "highlights",
        "monthly_usd",
        "yearly_usd",
        "status",
        "image",
        "is_popular",
        "rating",
        "profit_display",
        "drawdown_display",
        "asset_type",
      ];

      keys.forEach((k) => {
        if (payload?.[k] !== undefined) updatable[k] = payload[k];
      });

      await record.update(updatable);

      resolve({
        err: 0,
        mess: "Cập nhật gói bot thành công",
        data: record,
      });
    } catch (error) {
      reject(error);
    }
  });

export const deleteBotProduct = (id: number) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.CourseBuyTrade.destroy({ where: { id } });
      resolve({
        err: response > 0 ? 0 : 1,
        mess:
          response > 0 ? "Xóa gói bot thành công" : "Không tìm thấy gói bot",
      });
    } catch (error) {
      reject(error);
    }
  });
