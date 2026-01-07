import db from "../models";
import { Op, Sequelize } from "sequelize";

export const getDashboardData = () =>
  new Promise(async (resolve, reject) => {
    try {
      // 1. Summary Stats
      const totalUsers = await db.User.count();
      const totalOrders = await db.Order.count({
        where: { status: "PAID" },
      });
      const totalPosts = await db.PostNew.count({
        where: { status: "published" },
      });
      const totalRevenue = await db.Order.sum("amount", {
        where: { status: "PAID" },
      });

      // 2. User Growth (Last 7 months)
      // Note: This is a simplified query. For production, consider using a calendar table or more complex date logic.
      const userGrowth = await db.User.findAll({
        attributes: [
          [Sequelize.fn("DATE_FORMAT", Sequelize.col("created_at"), "%Y-%m"), "month"],
          [Sequelize.fn("COUNT", Sequelize.col("id")), "count"],
        ],
        group: ["month"],
        order: [["month", "ASC"]],
        limit: 7,
        raw: true,
      });

      // 3. Revenue Growth (Last 7 months)
      const revenueGrowth = await db.Order.findAll({
        where: { status: "PAID" },
        attributes: [
          [Sequelize.fn("DATE_FORMAT", Sequelize.col("created_at"), "%Y-%m"), "month"],
          [Sequelize.fn("SUM", Sequelize.col("amount")), "revenue"],
          [Sequelize.fn("COUNT", Sequelize.col("id")), "orders"],
        ],
        group: ["month"],
        order: [["month", "ASC"]],
        limit: 7,
        raw: true,
      });

      // 4. Post Categories
      const postCategories = await db.PostNew.findAll({
        where: { status: "published" },
        attributes: [
          "category",
          [Sequelize.fn("COUNT", Sequelize.col("id")), "value"],
        ],
        group: ["category"],
        raw: true,
      });

      resolve({
        err: 0,
        mess: "Lấy dữ liệu dashboard thành công",
        data: {
          summary: {
            totalUsers,
            totalOrders,
            totalPosts,
            totalRevenue: totalRevenue || 0,
          },
          charts: {
            userGrowth,
            revenueGrowth,
            postCategories: postCategories.map((p: any) => ({
              name: p.category,
              value: p.value,
            })),
          },
        },
      });
    } catch (error) {
      console.log(error);
      reject(error);
    }
  });
