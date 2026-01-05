import db from "../models";
import { Op } from "sequelize";
import slugify from "slugify";

export const getAllPosts = ({
  page,
  limit,
  order,
  title,
  category,
  ...query
}: any) =>
  new Promise(async (resolve, reject) => {
    try {
      const queries: any = { raw: true, nest: true };
      const offset = !page || +page <= 1 ? 0 : +page - 1;
      const fLimit = +limit || +(process.env.POST_LIMIT || 10);

      if (limit !== "all") {
        queries.offset = offset * fLimit;
        queries.limit = fLimit;
      }

      if (order) queries.order = [order];
      else queries.order = [["createdAt", "DESC"]];

      if (title) query.title = { [Op.substring]: title };
      if (category) query.category = category;

      const { count, rows } = await db.PostNew.findAndCountAll({
        where: query,
        ...queries,
        include: [
          {
            model: db.User,
            as: "authorData",
            attributes: ["id", "name", "avatar"],
          },
        ],
      });

      resolve({
        err: 0,
        mess:
          rows.length > 0
            ? "Lấy danh sách bài viết thành công"
            : "Không tìm thấy bài viết nào",
        data: rows,
        count,
        page: +page || 1,
        limit: +fLimit,
        totalPage: Math.ceil(count / fLimit),
      });
    } catch (error) {
      reject(error);
    }
  });

export const getPostDetail = (idOrSlug: string | number) =>
  new Promise(async (resolve, reject) => {
    try {
      let query: any = {};
      if (typeof idOrSlug === "string" && isNaN(Number(idOrSlug))) {
        query.slug = idOrSlug;
      } else {
        query.id = idOrSlug;
      }

      const response = await db.PostNew.findOne({
        where: query,
        include: [
          {
            model: db.User,
            as: "authorData",
            attributes: ["id", "name", "avatar"],
          },
        ],
      });

      resolve({
        err: response ? 0 : 1,
        mess: response
          ? "Lấy chi tiết bài viết thành công"
          : "Bài viết không tồn tại",
        data: response,
      });
    } catch (error) {
      reject(error);
    }
  });

export const createPost = (payload: any) =>
  new Promise(async (resolve, reject) => {
    try {
      if (!payload.title) {
        resolve({
          err: 1,
          mess: "Tiêu đề bài viết không được để trống",
        });
        return;
      }

      if (!payload.slug) {
        payload.slug = slugify(payload.title, { lower: true, locale: "vi" });
      }

      const response = await db.PostNew.create(payload);

      resolve({
        err: 0,
        mess: "Tạo bài viết mới thành công",
        data: response,
      });
    } catch (error) {
      reject(error);
    }
  });

export const updatePost = (id: number, payload: any) =>
  new Promise(async (resolve, reject) => {
    try {
      const post = await db.PostNew.findByPk(id);
      if (!post) {
        resolve({
          err: 1,
          mess: "Bài viết không tồn tại",
        });
        return;
      }

      if (payload.title && !payload.slug) {
        payload.slug = slugify(payload.title, { lower: true, locale: "vi" });
      }

      await db.PostNew.update(payload, {
        where: { id },
      });

      resolve({
        err: 0,
        mess: "Cập nhật bài viết thành công",
        data: await db.PostNew.findByPk(id),
      });
    } catch (error) {
      reject(error);
    }
  });

export const deletePost = (id: number) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.PostNew.destroy({
        where: { id },
      });

      resolve({
        err: response > 0 ? 0 : 1,
        mess:
          response > 0 ? "Xóa bài viết thành công" : "Bài viết không tồn tại",
      });
    } catch (error) {
      reject(error);
    }
  });
