import db from "../models";

export const listMyDiaries = (userId: number, query: any) =>
  new Promise(async (resolve, reject) => {
    try {
      const { page = 1, limit = 20 } = query || {};
      const fLimit = Number(limit) > 0 ? Number(limit) : 20;
      const fPage = Number(page) > 0 ? Number(page) : 1;
      const offset = (fPage - 1) * fLimit;

      const { rows, count } = await db.MyDiary.findAndCountAll({
        where: { user_id: userId },
        limit: fLimit,
        offset,
        order: [["created_at", "DESC"]],
      });

      resolve({
        err: 0,
        mess: "Lấy danh sách nhật ký thành công",
        data: rows,
        pagination: { page: fPage, limit: fLimit, total: count },
      });
    } catch (error) {
      reject(error);
    }
  });

export const getMyDiaryDetail = (userId: number, id: number) =>
  new Promise(async (resolve, reject) => {
    try {
      const diary = await db.MyDiary.findOne({
        where: { id, user_id: userId },
      });
      resolve({
        err: diary ? 0 : 1,
        mess: diary
          ? "Lấy chi tiết nhật ký thành công"
          : "Không tìm thấy nhật ký",
        data: diary,
      });
    } catch (error) {
      reject(error);
    }
  });

export const createMyDiary = (userId: number, body: any) =>
  new Promise(async (resolve, reject) => {
    try {
      const { title, content, emotion } = body || {};
      if (
        !title ||
        !String(title).trim() ||
        !content ||
        !String(content).trim()
      ) {
        resolve({
          err: 1,
          mess: "Thiếu title hoặc content",
        });
        return;
      }

      const allowed = ["positive", "negative", "neutral"];
      const emo = allowed.includes(String(emotion))
        ? String(emotion)
        : "neutral";

      const diary = await db.MyDiary.create({
        user_id: userId,
        title: String(title).trim(),
        content: String(content),
        emotion: emo,
      });

      resolve({
        err: 0,
        mess: "Tạo nhật ký thành công",
        data: diary,
      });
    } catch (error) {
      reject(error);
    }
  });

export const updateMyDiary = (userId: number, id: number, body: any) =>
  new Promise(async (resolve, reject) => {
    try {
      const diary = await db.MyDiary.findOne({
        where: { id, user_id: userId },
      });

      if (!diary) {
        resolve({
          err: 1,
          mess: "Nhật ký không tồn tại",
        });
        return;
      }

      const next: any = {};
      if (body.title !== undefined) next.title = String(body.title).trim();
      if (body.content !== undefined) next.content = String(body.content);
      if (body.emotion !== undefined) {
        const allowed = ["positive", "negative", "neutral"];
        if (allowed.includes(String(body.emotion))) {
          next.emotion = String(body.emotion);
        }
      }

      await diary.update(next);

      resolve({
        err: 0,
        mess: "Cập nhật nhật ký thành công",
        data: diary,
      });
    } catch (error) {
      reject(error);
    }
  });

export const deleteMyDiary = (userId: number, id: number) =>
  new Promise(async (resolve, reject) => {
    try {
      const count = await db.MyDiary.destroy({
        where: { id, user_id: userId },
      });

      resolve({
        err: count > 0 ? 0 : 1,
        mess: count > 0 ? "Xóa nhật ký thành công" : "Nhật ký không tồn tại",
      });
    } catch (error) {
      reject(error);
    }
  });

export const listAllDiaries = (query: any) =>
  new Promise(async (resolve, reject) => {
    try {
      const { page = 1, limit = 20, user_id, q } = query || {};
      const fLimit = Number(limit) > 0 ? Number(limit) : 20;
      const fPage = Number(page) > 0 ? Number(page) : 1;
      const offset = (fPage - 1) * fLimit;
      const where: any = {};
      if (user_id) where.user_id = Number(user_id);
      if (q)
        where.title = db.Sequelize.where(
          db.Sequelize.fn("LOWER", db.Sequelize.col("title")),
          "LIKE",
          `%${String(q).toLowerCase()}%`,
        );
      const { rows, count } = await db.MyDiary.findAndCountAll({
        where,
        limit: fLimit,
        offset,
        order: [["created_at", "DESC"]],
        include: [
          {
            model: db.User,
            as: "user",
            attributes: ["id", "firstName", "lastName", "email"],
          },
        ],
      });
      resolve({
        err: 0,
        mess: "Lấy danh sách nhật ký (admin) thành công",
        data: rows,
        pagination: { page: fPage, limit: fLimit, total: count },
      });
    } catch (error) {
      reject(error);
    }
  });

export const getDiaryDetailAdmin = (id: number) =>
  new Promise(async (resolve, reject) => {
    try {
      const diary = await db.MyDiary.findByPk(id, {
        include: [
          {
            model: db.User,
            as: "user",
            attributes: ["id", "firstName", "lastName", "email"],
          },
        ],
      });
      resolve({
        err: diary ? 0 : 1,
        mess: diary
          ? "Lấy chi tiết nhật ký thành công"
          : "Không tìm thấy nhật ký",
        data: diary,
      });
    } catch (error) {
      reject(error);
    }
  });

export const createDiaryAdmin = (payload: any) =>
  new Promise(async (resolve, reject) => {
    try {
      const { user_id, title, content } = payload || {};
      if (!user_id) {
        resolve({ err: 1, mess: "Thiếu user_id" });
        return;
      }
      if (
        !title ||
        !String(title).trim() ||
        !content ||
        !String(content).trim()
      ) {
        resolve({ err: 1, mess: "Thiếu title hoặc content" });
        return;
      }
      const diary = await db.MyDiary.create({
        user_id: Number(user_id),
        title: String(title).trim(),
        content: String(content),
      });
      resolve({ err: 0, mess: "Tạo nhật ký thành công", data: diary });
    } catch (error) {
      reject(error);
    }
  });

export const updateDiaryAdmin = (id: number, payload: any) =>
  new Promise(async (resolve, reject) => {
    try {
      const diary = await db.MyDiary.findByPk(id);
      if (!diary) {
        resolve({ err: 1, mess: "Nhật ký không tồn tại" });
        return;
      }
      const next: any = {};
      if (payload.title !== undefined)
        next.title = String(payload.title).trim();
      if (payload.content !== undefined) next.content = String(payload.content);
      if (payload.user_id !== undefined) next.user_id = Number(payload.user_id);
      await diary.update(next);
      resolve({ err: 0, mess: "Cập nhật nhật ký thành công", data: diary });
    } catch (error) {
      reject(error);
    }
  });

export const deleteDiaryAdmin = (id: number) =>
  new Promise(async (resolve, reject) => {
    try {
      const count = await db.MyDiary.destroy({ where: { id } });
      resolve({
        err: count > 0 ? 0 : 1,
        mess: count > 0 ? "Xóa nhật ký thành công" : "Nhật ký không tồn tại",
      });
    } catch (error) {
      reject(error);
    }
  });
