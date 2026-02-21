import db from "../models";
import { Op, Sequelize } from "sequelize";
import axios from "axios";
import { parseStringPromise } from "xml2js";

let cachedCalendarData: any[] = [];
let lastCalendarFetchTime = 0;
const CALENDAR_CACHE_DURATION = 60 * 60 * 1000; 

export const getEconomicCalendar = () =>
  new Promise(async (resolve, reject) => {
    try {
      const currentTime = Date.now();

      if (
        cachedCalendarData.length > 0 &&
        currentTime - lastCalendarFetchTime < CALENDAR_CACHE_DURATION
      ) {
        return resolve({
          err: 0,
          mess: "Lấy lịch kinh tế thành công (Cache)",
          data: cachedCalendarData,
        });
      }

      const url = "https://nfs.faireconomy.media/ff_calendar_thisweek.xml";
      const { data } = await axios.get(url, {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
        },
      });
      const result = await parseStringPromise(data);

      if (!result || !result.weeklyevents || !result.weeklyevents.event) {
        throw new Error("Invalid XML structure from ForexFactory");
      }

      const events = result.weeklyevents.event.map((e: any) => ({
        title: e.title?.[0],
        country: e.country?.[0],
        date: e.date?.[0],
        time: e.time?.[0],
        impact: e.impact?.[0],
        forecast: e.forecast?.[0],
        previous: e.previous?.[0],
      }));

      const relevantEvents = events.filter((e: any) => {
        const country = e.country || "";
        const impact = e.impact || "";

        const isUSD = country.toUpperCase() === "USD";
        const impactLower = impact.toLowerCase();
        const isHighOrMedium =
          impactLower.includes("high") || impactLower.includes("medium");

        return isUSD && isHighOrMedium;
      });

      relevantEvents.sort((a: any, b: any) => {
        const dateA = new Date(`${a.date} ${a.time}`);
        const dateB = new Date(`${b.date} ${b.time}`);
        return dateA.getTime() - dateB.getTime();
      });

      const translatedEvents = await Promise.all(
        relevantEvents.map(async (item: any) => {
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
              },
            );
            const text =
              Array.isArray(res.data) &&
              Array.isArray(res.data[0]) &&
              Array.isArray(res.data[0][0])
                ? res.data[0][0][0]
                : item.title;
            return { ...item, title: text };
          } catch {
            return item;
          }
        }),
      );

      cachedCalendarData = translatedEvents;
      lastCalendarFetchTime = currentTime;

      resolve({
        err: 0,
        mess: "Lấy lịch kinh tế thành công",
        data: translatedEvents,
      });
    } catch (error) {
      console.error("Error in getEconomicCalendar:", error);

      if (cachedCalendarData.length > 0) {
        return resolve({
          err: 0,
          mess: "Lấy lịch kinh tế từ cache (Fallback do lỗi)",
          data: cachedCalendarData,
        });
      }

      resolve({
        err: 1,
        mess: "Lỗi khi lấy lịch kinh tế",
        data: [],
      });
    }
  });

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
              },
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
        }),
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
