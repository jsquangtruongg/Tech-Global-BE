import { QueryInterface } from "sequelize";

module.exports = {
  async up(queryInterface: QueryInterface) {
    const now = new Date();
    await queryInterface.bulkInsert("knowledge_articles", [
      {
        id: "price-action",
        topic: "METHODS",
        title: "Price Action",
        summary:
          "Phương pháp đọc hành động giá để xác định xu hướng, vùng phản ứng",
        content: "<p>Nội dung chi tiết về Price Action...</p> ",
        level: "BASIC",
        tags: JSON.stringify(["Quan trọng", "Bắt buộc phải biết"]),
        related: JSON.stringify(["Pin Bar", "Inside Bar"]),
        created_at: now,
        updated_at: now, 

        
      },
      {
        id: "trend-following",
        topic: "METHODS",
        title: "Trend Following",
        summary:
          "Đi theo xu hướng chính, bỏ qua nhiễu nhỏ để tối ưu RR.",
        content: "<p>Nội dung chi tiết về Trend Following...</p>",
        level: "BASIC",
        tags: JSON.stringify(["Quan trọng"]),
        related: JSON.stringify(["EMA", "MACD"]),
        created_at: now,
        updated_at: now,
      },
      {
        id: "fomo",
        topic: "PSYCHOLOGY",
        title: "FOMO",
        summary: "Nỗi sợ bỏ lỡ khiến vào lệnh không theo kế hoạch.",
        content: "<p>Nội dung chi tiết về FOMO...</p>",
        level: "BASIC",
        tags: JSON.stringify(["Dễ sai"]),
        related: JSON.stringify(["Checklist vào lệnh", "Nhật ký cảm xúc"]),
        created_at: now,
        updated_at: now,
      },
    ]);
  },

  async down(queryInterface: QueryInterface) {
    await queryInterface.bulkDelete("knowledge_articles", {});
  },
};
