import db from "../models";
import { Op, Sequelize } from "sequelize";
import axios from "axios";

export const getDashboardData = () =>
  new Promise(async (resolve, reject) => {
    try {
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

      const userGrowth = await db.User.findAll({
        attributes: [
          [
            Sequelize.fn("DATE_FORMAT", Sequelize.col("created_at"), "%Y-%m"),
            "month",
          ],
          [Sequelize.fn("COUNT", Sequelize.col("id")), "count"],
        ],
        group: ["month"],
        order: [["month", "ASC"]],
        limit: 7,
        raw: true,
      });

      const revenueGrowth = await db.Order.findAll({
        where: { status: "PAID" },
        attributes: [
          [
            Sequelize.fn("DATE_FORMAT", Sequelize.col("created_at"), "%Y-%m"),
            "month",
          ],
          [Sequelize.fn("SUM", Sequelize.col("amount")), "revenue"],
          [Sequelize.fn("COUNT", Sequelize.col("id")), "orders"],
        ],
        group: ["month"],
        order: [["month", "ASC"]],
        limit: 7,
        raw: true,
      });

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

export const getGoldNews = () =>
  new Promise(async (resolve, reject) => {
    try {
      const apiKey = process.env.NEWS_API_KEY;

      if (!apiKey) {
        resolve({
          err: 1,
          mess: "Thiếu NEWS_API_KEY trong file .env",
          data: [],
        });
        return;
      }

      const url = "https://newsapi.org/v2/everything";
      const params = {
        q: 'Fed OR FOMC OR "interest rate" OR inflation OR war OR Ukraine OR "Middle East" OR geopolitical',
        qInTitle: 'gold OR "gold price" OR XAUUSD',
        language: "en",
        sortBy: "publishedAt",
        pageSize: 8,
        domains:
          "nytimes.com,foxnews.com,foxbusiness.com,reuters.com,marketwatch.com,wsj.com",
        apiKey,
      };

      const { data } = await axios.get(url, { params });
      const articles = Array.isArray(data.articles) ? data.articles : [];

      type GoldNewsItem = {
        id: string;
        title: string;
        source?: string;
        url: string;
        publishedAt?: string;
      };

      const mapped: GoldNewsItem[] = articles.map((a: any) => ({
        id: a.url,
        title: a.title,
        source: a.source?.name,
        url: a.url,
        publishedAt: a.publishedAt,
      }));

      const translated = await Promise.all(
        mapped.map(async (item: GoldNewsItem) => {
          try {
            const res = await axios.get(
              "https://translate.googleapis.com/translate_a/single",
              {
                params: {
                  client: "gtx",
                  sl: "en",
                  tl: "vi",
                  dt: "t",
                  q: item.title || "",
                },
              }
            );
            const text =
              Array.isArray(res.data) &&
              Array.isArray(res.data[0]) &&
              Array.isArray(res.data[0][0])
                ? res.data[0][0][0]
                : item.title;
            return { ...item, titleVi: text };
          } catch {
            return { ...item, titleVi: item.title };
          }
        })
      );

      resolve({
        err: 0,
        mess: "Lấy tin tức vàng thành công",
        data: translated,
      });
    } catch (error) {
      console.log(error);
      reject(error);
    }
  });

export const getGoldChartData = (query: any) =>
  new Promise(async (resolve, reject) => {
    try {
      const baseUrl = process.env.PYTHON_XAU_API_URL || "http://localhost:8000";
      const timeframe = (query?.timeframe as string | undefined) || "5m";
      const limitRaw = query?.limit as string | number | undefined;
      const limit =
        typeof limitRaw === "string"
          ? parseInt(limitRaw, 10) || 300
          : limitRaw || 300;

      const { data } = await axios.get(`${baseUrl}/xau/data`, {
        params: { timeframe, limit },
      });

      resolve({
        err: 0,
        mess: "Lấy dữ liệu XAUUSD thành công",
        data,
      });
    } catch (error) {
      console.log(error);
      reject(error);
    }
  });
