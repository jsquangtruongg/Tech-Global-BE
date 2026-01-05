import db from "../models";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
require("dotenv").config();

const hashPassword = (password: string) =>
  bcrypt.hashSync(password, bcrypt.genSaltSync(10));

export const register = ({ email, password, name }: any) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.User.findOrCreate({
        where: { email },
        defaults: {
          email,
          name,
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
            { expiresIn: "5d" }
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
            { expiresIn: "5d" }
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
