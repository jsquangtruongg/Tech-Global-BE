import db from "../models";

export const getAllStudies = (sectionId?: number) =>
  new Promise(async (resolve, reject) => {
    try {
      const whereClause = sectionId ? { section_id: sectionId } : {};
      const response = await db.Study.findAll({
        where: whereClause,
        include: [
          {
            model: db.InterviewSection,
            as: "section",
            attributes: ["id", "name", "topic_id"],
            include: [
              {
                model: db.InterviewTopic,
                as: "topic",
                attributes: ["id", "name", "market"],
              },
            ],
          },
        ],
        order: [["id", "DESC"]],
      });
      resolve({
        err: 0,
        mess: "Lấy danh sách bài tập thành công",
        data: response,
      });
    } catch (error) {
      reject(error);
    }
  });

export const getStudyById = (id: number) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Study.findByPk(id, {
        include: [
          {
            model: db.InterviewSection,
            as: "section",
            attributes: ["id", "name"],
          },
        ],
      });
      resolve({
        err: response ? 0 : 1,
        mess: response ? "Lấy bài tập thành công" : "Bài tập không tồn tại",
        data: response,
      });
    } catch (error) {
      reject(error);
    }
  });

export const createStudy = (body: any) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Study.create(body);
      resolve({
        err: 0,
        mess: "Tạo bài tập thành công",
        data: response,
      });
    } catch (error) {
      reject(error);
    }
  });

export const updateStudy = (id: number, body: any) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Study.update(body, {
        where: { id },
      });
      resolve({
        err: response[0] > 0 ? 0 : 1,
        mess:
          response[0] > 0
            ? "Cập nhật bài tập thành công"
            : "Bài tập không tồn tại",
      });
    } catch (error) {
      reject(error);
    }
  });

export const deleteStudy = (id: number) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Study.destroy({ where: { id } });
      resolve({
        err: response > 0 ? 0 : 1,
        mess: response > 0 ? "Xóa bài tập thành công" : "Bài tập không tồn tại",
      });
    } catch (error) {
      reject(error);
    }
  });
