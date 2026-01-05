import { QueryInterface } from "sequelize";

export default {
  up: async (queryInterface: QueryInterface) => {
    // 1. Insert Topics
    await queryInterface.bulkInsert("interview_topics", [
      {
        id: 1,
        name: "Phân tích kỹ thuật",
        market: "crypto",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 2,
        name: "Quản lý rủi ro",
        market: "crypto",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 3,
        name: "Tâm lý giao dịch",
        market: "crypto",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 4,
        name: "Tin tức & vĩ mô",
        market: "crypto",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 5,
        name: "Phân tích kỹ thuật",
        market: "gold",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 6,
        name: "Quản lý rủi ro",
        market: "gold",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 7,
        name: "Tâm lý giao dịch",
        market: "gold",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 8,
        name: "Tin tức & vĩ mô",
        market: "gold",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);

    // 2. Insert Sections
    await queryInterface.bulkInsert("interview_sections", [
      // Topic 1: Crypto Technical Analysis
      {
        id: 1,
        topic_id: 1,
        name: "Price Action",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 2,
        topic_id: 1,
        name: "Mô hình nến",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 3,
        topic_id: 1,
        name: "Kháng cự/Hỗ trợ",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 4,
        topic_id: 1,
        name: "Trendline",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 5,
        topic_id: 1,
        name: "Fibonacci",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 6,
        topic_id: 1,
        name: "RSI",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 7,
        topic_id: 1,
        name: "MACD",
        created_at: new Date(),
        updated_at: new Date(),
      },
      // Topic 5: Gold Technical Analysis
      {
        id: 8,
        topic_id: 5,
        name: "Price Action",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 9,
        topic_id: 5,
        name: "Mô hình nến",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);

    // 3. Insert Questions
    await queryInterface.bulkInsert("interviews", [
      {
        id: 1,
        section_id: 1,
        question: "Price Action là gì và nguyên lý cốt lõi?",
        answer:
          "Phân tích hành động giá dựa trên cấu trúc thị trường, vùng cung cầu và phản ứng của nến.",
        level: "Entry",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 2,
        section_id: 1,
        question: "Cấu trúc thị trường gồm những thành phần nào?",
        answer: "Xu hướng, vùng tích lũy, vùng quay đầu, và điểm phá vỡ.",
        level: "Junior",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 3,
        section_id: 2,
        question: "Mô hình nến đảo chiều mạnh thường gặp?",
        answer: "Engulfing, Pin Bar, Morning Star, Evening Star.",
        level: "Middle",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete("interviews", {});
    await queryInterface.bulkDelete("interview_sections", {});
    await queryInterface.bulkDelete("interview_topics", {});
  },
};
