import db from "../models";
 
export const listMine = (userId: number, query: any) =>
  new Promise(async (resolve, reject) => {
    try {
      const { page = 1, limit = 50 } = query || {};
      const fLimit = Number(limit) > 0 ? Number(limit) : 50;
      const fPage = Number(page) > 0 ? Number(page) : 1;
      const offset = (fPage - 1) * fLimit;
      const { rows, count } = await db.PsychologyCollection.findAndCountAll({
        where: { user_id: userId },
        include: [
          {
            model: db.Psychology,
            as: "article",
          },
        ],
        order: [["created_at", "DESC"]],
        limit: fLimit,
        offset,
      });
      resolve({
        err: 0,
        mess: "Lấy sưu tầm thành công",
        data: rows,
        pagination: { page: fPage, limit: fLimit, total: count },
      });
    } catch (error) {
      reject(error);
    }
  });
 
export const addMine = (userId: number, psychology_id: number) =>
  new Promise(async (resolve, reject) => {
    try {
      const existed = await db.PsychologyCollection.findOne({
        where: { user_id: userId, psychology_id },
      });
      if (existed) {
        resolve({ err: 0, mess: "Đã tồn tại trong sưu tầm", data: existed });
        return;
      }
      const created = await db.PsychologyCollection.create({
        user_id: userId,
        psychology_id,
      });
      resolve({ err: 0, mess: "Đã thêm vào sưu tầm", data: created });
    } catch (error) {
      reject(error);
    }
  });
 
export const removeMine = (userId: number, id: number) =>
  new Promise(async (resolve, reject) => {
    try {
      const count = await db.PsychologyCollection.destroy({
        where: { id, user_id: userId },
      });
      resolve({
        err: count > 0 ? 0 : 1,
        mess: count > 0 ? "Đã xóa khỏi sưu tầm" : "Không tìm thấy mục sưu tầm",
      });
    } catch (error) {
      reject(error);
    }
  });
