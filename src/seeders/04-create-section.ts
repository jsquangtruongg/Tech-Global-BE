import { QueryInterface } from "sequelize";

export default {
  up: async (queryInterface: QueryInterface) => {
    return queryInterface.bulkInsert("sections", [
      // Course 1: Gold Trading
      {
        id: 1,
        course_id: 1,
        title: "Tổng quan thị trường Vàng",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 2,
        course_id: 1,
        title: "Phân tích cơ bản (Fundamental Analysis)",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 3,
        course_id: 1,
        title: "Chiến lược giao dịch Vàng",
        created_at: new Date(),
        updated_at: new Date(),
      },

      // Course 2: Crypto
      {
        id: 4,
        course_id: 2,
        title: "Blockchain & Bitcoin cơ bản",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 5,
        course_id: 2,
        title: "Altcoins & Tokens",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 6,
        course_id: 2,
        title: "Sàn giao dịch & Ví lưu trữ",
        created_at: new Date(),
        updated_at: new Date(),
      },

      // Course 3: Technical Analysis
      {
        id: 7,
        course_id: 3,
        title: "Nến Nhật (Candlestick Patterns)",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 8,
        course_id: 3,
        title: "Cấu trúc thị trường (Market Structure)",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 9,
        course_id: 3,
        title: "Indicators & Oscillators",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },
  down: async (queryInterface: QueryInterface) => {
    return queryInterface.bulkDelete("sections", {}, {});
  },
};
