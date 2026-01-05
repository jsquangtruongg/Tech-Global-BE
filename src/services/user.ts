import db from "../models";
import { Op } from "sequelize";
import bcrypt from "bcryptjs";

const hashPassword = (password: string) =>
  bcrypt.hashSync(password, bcrypt.genSaltSync(10));

export const createUser = (payload: any) =>
  new Promise(async (resolve, reject) => {
    try {
      const { email, password, name, role, phone, status } = payload;
      let role_code = "R3";
      if (role === "admin") role_code = "R1";
      if (role === "staff") role_code = "R2";

      const [user, created] = await db.User.findOrCreate({
        where: { email },
        defaults: {
          email,
          name,
          password: hashPassword(password),
          role_code,
          phone,
          // status // status not in User model yet, ignore for now
        },
      });

      resolve({
        err: created ? 0 : 1,
        mess: created ? "Tạo người dùng thành công" : "Email đã được sử dụng",
        userData: created ? user : null,
      });
    } catch (error) {
      reject(error);
    }
  });

export const getOne = (userId: number) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.User.findOne({
        where: { id: userId },
        attributes: {
          exclude: ["password", "role_code", "refreshToken"],
        },
        include: [
          {
            model: db.Role,
            as: "roleData",
            attributes: ["id", "code", "value"],
          },
        ],
      });
      resolve({
        err: response ? 0 : 1,
        mess: response ? "Lấy dữ liệu thành công" : "Người dùng không tồn tại",
        userData: response,
      });
    } catch (error) {
      reject(error);
    }
  });

export const updateUser = (userId: number, payload: any) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.User.update(payload, {
        where: { id: userId },
      });
      resolve({
        err: response[0] > 0 ? 0 : 1,
        mess:
          response[0] > 0
            ? "Cập nhật thành công"
            : "Người dùng không tồn tại hoặc không có gì thay đổi",
      });
    } catch (error) {
      reject(error);
    }
  });

export const deleteUser = (userId: number) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.User.destroy({
        where: { id: userId },
      });
      resolve({
        err: response > 0 ? 0 : 1,
        mess: response > 0 ? "Xóa thành công" : "Người dùng không tồn tại",
      });
    } catch (error) {
      reject(error);
    }
  });

export const getAllUsers = ({ page, limit, order, name, ...query }: any) =>
  new Promise(async (resolve, reject) => {
    try {
      const queries: any = { raw: true, nest: true };
      const offset = !page || +page <= 1 ? 0 : +page - 1;

      if (limit !== "all") {
        const fLimit = +limit || +process.env.LIMIT_USER! || 10;
        queries.offset = offset * fLimit;
        queries.limit = fLimit;
      }

      if (order) queries.order = [order];
      if (name) query.name = { [Op.substring]: name };

      const response = await db.User.findAndCountAll({
        where: query,
        ...queries,
        attributes: {
          exclude: ["password", "role_code", "refreshToken"],
        },
        include: [
          {
            model: db.Role,
            as: "roleData",
            attributes: ["code", "value"],
          },
        ],
      });
      resolve({
        err: response ? 0 : 1,
        mess: response
          ? "Lấy dữ liệu thành công"
          : "Không tìm thấy người dùng nào",
        userData: response.rows,
        count: response.count,
      });
    } catch (error) {
      reject(error);
    }
  });
