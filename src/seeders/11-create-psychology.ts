import { QueryInterface } from "sequelize";

module.exports = {
  async up(queryInterface: QueryInterface) {
    const now = new Date();
    await queryInterface.bulkInsert("psychologies", [
      {
        title: "FOMO",
        type: "negative",
        impact: "high",
        frequency: "common",
        description:
          "Lo sợ bỏ lỡ cơ hội khiến vào lệnh vội vàng, thiếu kế hoạch.",
        content:
          "<p>FOMO khiến trader vào lệnh theo cảm xúc. Hãy bám sát hệ thống và kế hoạch giao dịch.</p>",
        created_at: now,
        updated_at: now,
      },
      {
        title: "Sợ hãi",
        type: "negative",
        impact: "medium",
        frequency: "common",
        description:
          "Ngại rủi ro quá mức dẫn đến thoát lệnh sớm hoặc không dám vào lệnh.",
        content:
          "<p>Sợ hãi khiến bạn bỏ lỡ cơ hội. Quản trị rủi ro và tuân thủ kỷ luật.</p>",
        created_at: now,
        updated_at: now,
      },
      {
        title: "Tự tin",
        type: "positive",
        impact: "medium",
        frequency: "common",
        description:
          "Tin tưởng vào kế hoạch giao dịch, tuân thủ quy tắc đã đặt ra.",
        content:
          "<p>Tự tin đúng mức giúp bạn theo đuổi chiến lược nhất quán.</p>",
        created_at: now,
        updated_at: now,
      },
      {
        title: "Tham lam",
        type: "negative",
        impact: "high",
        frequency: "common",
        description:
          "Kéo target quá mức, giữ lệnh quá lâu, dễ dẫn đến đảo chiều bất lợi.",
        content:
          "<p>Tham lam phá vỡ kỷ luật. Hãy đặt target và stop hợp lý.</p>",
        created_at: now,
        updated_at: now,
      },
      {
        title: "Bình tĩnh",
        type: "positive",
        impact: "low",
        frequency: "rare",
        description:
          "Giữ trạng thái cân bằng, ra quyết định theo hệ thống, ít bị nhiễu.",
        content:
          "<p>Bình tĩnh giúp đánh giá khách quan. Rèn luyện thói quen ghi chép.</p>",
        created_at: now,
        updated_at: now,
      },
      {
        title: "Quá tự tin",
        type: "negative",
        impact: "medium",
        frequency: "rare",
        description:
          "Bỏ qua tín hiệu rủi ro, tăng khối lượng bất hợp lý sau vài lệnh thắng.",
        content:
          "<p>Quá tự tin dễ dẫn đến sai lầm. Luôn kiểm soát khối lượng và rủi ro.</p>",
        created_at: now,
        updated_at: now,
      },
    ]);
  },

  async down(queryInterface: QueryInterface) {
    await queryInterface.bulkDelete("psychologies", {});
  },
};
