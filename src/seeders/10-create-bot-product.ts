import { QueryInterface } from "sequelize";

export default {
  up: async (queryInterface: QueryInterface) => {
    return queryInterface.bulkInsert("course_buy_trades", [
      {
        id: 1,
        code: "bot-gold-pro",
        name: "Gold Pro",
        subtitle: "Breakout · Session Aware",
        highlights: JSON.stringify([
          "Tín hiệu M1–M5",
          "Không martingale",
          "Hỗ trợ cài đặt",
        ]),
        monthly_usd: 69,
        yearly_usd: 699,
        status: "ACTIVE",
        image:
          "https://res.cloudinary.com/dq4basktt/image/upload/v1768373624/tech-global/bot-products/xwzt1d2plxqpshdsefrl.jpg",
        is_popular: true,
        rating: 4.8,
        profit_display: "+45% 6 tháng",
        drawdown_display: "DD tối đa 12%",
        asset_type: "Gold",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 2,
        code: "bot-gold-trend",
        name: "Gold Trend",
        subtitle: "Trend Following · Regime Detect",
        highlights: JSON.stringify([
          "Theo xu hướng",
          "Trailing theo swing",
          "Bộ lọc nhiễu",
        ]),
        monthly_usd: 62,
        yearly_usd: 619,
        status: "ACTIVE",
        image:
          "https://res.cloudinary.com/dq4basktt/image/upload/v1768373538/tech-global/bot-products/hmcofbq1fmr48g0oknib.jpg",
        is_popular: false,
        rating: 4.7,
        profit_display: "+28% 6 tháng",
        drawdown_display: "DD tối đa 10%",
        asset_type: "Gold",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 3,
        code: "bot-crypto-alpha",
        name: "Crypto Alpha",
        subtitle: "Trend Following · Multi-timeframe",
        highlights: JSON.stringify([
          "Theo xu hướng",
          "Quản trị rủi ro",
          "Tối ưu giao dịch",
        ]),
        monthly_usd: 59,
        yearly_usd: 599,
        status: "ACTIVE",
        image:
          "https://res.cloudinary.com/dq4basktt/image/upload/v1768373401/tech-global/bot-products/heqnueqntapzvmphjuii.png",
        is_popular: true,
        rating: 5.0,
        profit_display: "+32% 6 tháng",
        drawdown_display: "DD tối đa 8%",
        asset_type: "Crypto",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },
  down: async (queryInterface: QueryInterface) => {
    return queryInterface.bulkDelete("course_buy_trades", {}, {});
  },
};
