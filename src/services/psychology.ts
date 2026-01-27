import db from "../models";
import { Op } from "sequelize";

export const list = (query: any) =>
  new Promise(async (resolve, reject) => {
    try {
      const { q, type, impact, frequency, page = 1, limit = 20 } = query;
      const where: any = {};
      if (type) where.type = type;
      if (impact) where.impact = impact;
      if (frequency) where.frequency = frequency;
      if (q) {
        where[Op.or] = [
          { title: { [Op.like]: `%${q}%` } },
          { description: { [Op.like]: `%${q}%` } },
          { content: { [Op.like]: `%${q}%` } },
        ];
      }
      const offset = (Number(page) - 1) * Number(limit);
      const response = await db.Psychology.findAndCountAll({
        where,
        order: [["updated_at", "DESC"]],
        limit: Number(limit),
        offset,
      });
      resolve({
        err: 0,
        mess: "Lấy danh sách Psychology thành công",
        data: response.rows,
        pagination: {
          total: response.count,
          page: Number(page),
          limit: Number(limit),
        },
      });
    } catch (error) {
      reject(error);
    }
  });

export const detail = (id: number) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Psychology.findByPk(id);
      resolve({
        err: response ? 0 : 1,
        mess: response ? "Lấy chi tiết thành công" : "Không tìm thấy bài",
        data: response,
      });
    } catch (error) {
      reject(error);
    }
  });

export const create = (body: any) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Psychology.create(body);
      resolve({
        err: 0,
        mess: "Tạo bài thành công",
        data: response,
      });
    } catch (error) {
      reject(error);
    }
  });

export const update = (id: number, body: any) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Psychology.update(body, { where: { id } });
      resolve({
        err: response[0] > 0 ? 0 : 1,
        mess: response[0] > 0 ? "Cập nhật thành công" : "Bài không tồn tại",
      });
    } catch (error) {
      reject(error);
    }
  });

export const remove = (id: number) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Psychology.destroy({ where: { id } });
      resolve({
        err: response > 0 ? 0 : 1,
        mess: response > 0 ? "Xóa thành công" : "Bài không tồn tại",
      });
    } catch (error) {
      reject(error);
    }
  });
