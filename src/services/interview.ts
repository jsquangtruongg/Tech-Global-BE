import db from "../models";

export const getInterviewTree = (market?: string) =>
  new Promise(async (resolve, reject) => {
    try {
      const whereClause = market ? { market } : {};
      const response = await db.InterviewTopic.findAll({
        where: whereClause,
        include: [
          {
            model: db.InterviewSection,
            as: "sections",
            include: [
              {
                model: db.Interview,
                as: "questions",
              },
            ],
          },
        ],
        order: [
          ["id", "ASC"],
          [{ model: db.InterviewSection, as: "sections" }, "id", "ASC"],
          [
            {
              model: db.InterviewSection,
              as: "sections",
            },
            { model: db.Interview, as: "questions" },
            "id",
            "ASC",
          ],
        ],
      });
      resolve({
        err: 0,
        mess: "Lấy cây câu hỏi thành công",
        data: response,
      });
    } catch (error) {
      reject(error);
    }
  });
export const getTopics = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.InterviewTopic.findAll();
      resolve({
        err: 0,
        mess: "Lấy danh sách mục thành công",
        data: response,
      });
    } catch (error) {
      reject(error);
    }
  });

export const createTopic = (body: any) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.InterviewTopic.create(body);
      resolve({
        err: 0,
        mess: "Tạo mục thành công",
        data: response,
      });
    } catch (error) {
      reject(error);
    }
  });

export const updateTopic = (id: number, body: any) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.InterviewTopic.update(body, {
        where: { id },
      });
      resolve({
        err: response[0] > 0 ? 0 : 1,
        mess: response[0] > 0 ? "Cập nhật mục thành công" : "Mục không tồn tại",
      });
    } catch (error) {
      reject(error);
    }
  });

export const deleteTopic = (id: number) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.InterviewTopic.destroy({ where: { id } });
      resolve({
        err: response > 0 ? 0 : 1,
        mess: response > 0 ? "Xóa mục thành công" : "Mục không tồn tại",
      });
    } catch (error) {
      reject(error);
    }
  });

// Sections
export const getSections = (topicId: number) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.InterviewSection.findAll({
        where: { topic_id: topicId },
      });
      resolve({
        err: 0,
        mess: "Lấy danh sách phần thành công",
        data: response,
      });
    } catch (error) {
      reject(error);
    }
  });

export const createSection = (body: any) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.InterviewSection.create(body);
      resolve({
        err: 0,
        mess: "Tạo phần thành công",
        data: response,
      });
    } catch (error) {
      reject(error);
    }
  });

export const updateSection = (id: number, body: any) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.InterviewSection.update(body, {
        where: { id },
      });
      resolve({
        err: response[0] > 0 ? 0 : 1,
        mess:
          response[0] > 0 ? "Cập nhật phần thành công" : "Phần không tồn tại",
      });
    } catch (error) {
      reject(error);
    }
  });

export const deleteSection = (id: number) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.InterviewSection.destroy({ where: { id } });
      resolve({
        err: response > 0 ? 0 : 1,
        mess: response > 0 ? "Xóa phần thành công" : "Phần không tồn tại",
      });
    } catch (error) {
      reject(error);
    }
  });

// Questions
export const getQuestions = (sectionId: number) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Interview.findAll({
        where: { section_id: sectionId },
      });
      resolve({
        err: 0,
        mess: "Lấy danh sách câu hỏi thành công",
        data: response,
      });
    } catch (error) {
      reject(error);
    }
  });

export const createQuestion = (body: any) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Interview.create(body);
      resolve({
        err: 0,
        mess: "Tạo câu hỏi thành công",
        data: response,
      });
    } catch (error) {
      reject(error);
    }
  });

export const updateQuestion = (id: number, body: any) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Interview.update(body, {
        where: { id },
      });
      resolve({
        err: response[0] > 0 ? 0 : 1,
        mess:
          response[0] > 0
            ? "Cập nhật câu hỏi thành công"
            : "Câu hỏi không tồn tại",
      });
    } catch (error) {
      reject(error);
    }
  });

export const deleteQuestion = (id: number) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Interview.destroy({ where: { id } });
      resolve({
        err: response > 0 ? 0 : 1,
        mess: response > 0 ? "Xóa câu hỏi thành công" : "Câu hỏi không tồn tại",
      });
    } catch (error) {
      reject(error);
    }
  });
