import { QueryInterface } from "sequelize";

export default {
  up: async (queryInterface: QueryInterface) => {
    return queryInterface.bulkInsert("lessons", [
      // Section 1: Gold Overview (Course 1)
      {
        id: 1,
        section_id: 1,
        title: "Lịch sử giá Vàng & Các yếu tố ảnh hưởng",
        duration: "15:00",
        preview: true,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 2,
        section_id: 1,
        title: "Phân biệt Vàng vật chất & Vàng tài khoản",
        duration: "12:00",
        preview: true,
        created_at: new Date(),
        updated_at: new Date(),
      },

      // Section 2: Fundamental (Course 1)
      {
        id: 3,
        section_id: 2,
        title: "Bản tin Non-Farm & CPI",
        duration: "20:00",
        preview: false,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 4,
        section_id: 2,
        title: "Chính sách FED & Lãi suất",
        duration: "18:00",
        preview: false,
        created_at: new Date(),
        updated_at: new Date(),
      },

      // Section 4: Blockchain (Course 2)
      {
        id: 5,
        section_id: 4,
        title: "Blockchain là gì?",
        duration: "10:00",
        preview: true,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 6,
        section_id: 4,
        title: "Bitcoin hoạt động như thế nào?",
        duration: "15:00",
        preview: true,
        created_at: new Date(),
        updated_at: new Date(),
      },

      // Section 7: Candlestick (Course 3)
      {
        id: 7,
        section_id: 7,
        title: "Mô hình nến đảo chiều mạnh",
        duration: "25:00",
        preview: true,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 8,
        section_id: 7,
        title: "Pinbar & Engulfing",
        duration: "20:00",
        preview: false,
        created_at: new Date(),
        updated_at: new Date(),
      },

      // Section 9: Indicators (Course 3)
      {
        id: 9,
        section_id: 9,
        title: "RSI & Phân kỳ (Divergence)",
        duration: "22:00",
        preview: false,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 10,
        section_id: 9,
        title: "Bollinger Bands chiến thực",
        duration: "18:00",
        preview: false,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },
  down: async (queryInterface: QueryInterface) => {
    return queryInterface.bulkDelete("lessons", {}, {});
  },
};
