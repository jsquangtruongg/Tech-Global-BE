import db from "../models";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import axios from "axios";
import crypto from "crypto";
require("dotenv").config();

const hashPassword = (password: string) =>
  bcrypt.hashSync(password, bcrypt.genSaltSync(10));

export const register = ({ email, password, firstName, lastName }: any) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.User.findOrCreate({
        where: { email },
        defaults: {
          email,
          firstName,
          lastName,
          password: hashPassword(password),
          role_code: "R3",
        },
      });
      const token = response[1]
        ? jwt.sign(
            {
              id: response[0].id,
              email: response[0].email,
              role_code: response[0].role_code,
            },
            process.env.JWT_SECRET as string,
            { expiresIn: "5d" },
          )
        : null;
      resolve({
        err: response[1] ? 0 : 1,
        mes: response[1] ? "Register is successfully" : "Email is used",
        accessToken: token ? `Bearer ${token}` : null,
      });
    } catch (error) {
      reject(error);
    }
  });

export const login = ({ email, password }: any) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.User.findOne({
        where: { email },
        raw: true,
      });
      const isChecked =
        response && bcrypt.compareSync(password, response.password);
      const token = isChecked
        ? jwt.sign(
            {
              id: response.id,
              email: response.email,
              role_code: response.role_code,
            },
            process.env.JWT_SECRET as string,
            { expiresIn: "5d" },
          )
        : null;

      resolve({
        err: token ? 0 : 1,
        mes: token
          ? "Login is successfully"
          : response
            ? "Password is wrong"
            : "Email is not registered",
        accessToken: token ? `Bearer ${token}` : null,
      });
    } catch (error) {
      reject(error);
    }
  });

export const loginGoogle = (token: string) =>
  new Promise(async (resolve, reject) => {
    try {
      const googleResponse = await axios.get(
        "https://www.googleapis.com/oauth2/v3/userinfo",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      const { email, given_name, family_name, picture, sub } =
        googleResponse.data;

      if (!email) {
        return resolve({
          err: 1,
          mes: "Không thể lấy thông tin email từ Google",
        });
      }

      let user = await db.User.findOne({
        where: { email },
        raw: true,
      });

      if (!user) {
        // Create new user
        const password = crypto.randomBytes(16).toString("hex");
        const newUser = await db.User.create({
          email,
          firstName: given_name || "User",
          lastName: family_name || "",
          password: hashPassword(password),
          role_code: "R3",
          avatar: picture,
          type_login: "google",
          is_active: true,
          verification_code: null,
        });
        user = newUser.get({ plain: true });
      } else {
        // Update user if needed (e.g. avatar, type_login)
        if (user.type_login !== "google") {
          // Optional: Link account or just allow login
          // We can update type_login to 'google' or keep 'local'
        }
      }

      const accessToken = jwt.sign(
        {
          id: user.id,
          email: user.email,
          role_code: user.role_code,
        },
        process.env.JWT_SECRET as string,
        { expiresIn: "5d" },
      );

      resolve({
        err: 0,
        mes: "Đăng nhập Google thành công",
        accessToken: accessToken ? `Bearer ${accessToken}` : null,
      });
    } catch (error) {
      console.log(error);
      reject({
        err: 1,
        mes: "Lỗi đăng nhập bằng Google",
      });
    }
  });
