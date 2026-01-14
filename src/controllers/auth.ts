import * as services from "../services";
import { InternalServerError, badRequest } from "../middlewares/handle_error";
import { Request, Response } from "express";
import Joi from "joi";
import { email, password } from "../helpers/joi_schema";

export const register = async (req: Request, res: Response) => {
  try {
    const schema = Joi.object({
      email,
      password,
      firstName: Joi.string().required(),
      lastName: Joi.string().required(),
    });

    const { error, value } = schema.validate(req.body);
    if (error) return badRequest(error.details[0].message, res);

    const {
      email: emailValue,
      password: passwordValue,
      firstName,
      lastName,
    } = value as any;

    const response = await services.register({
      email: emailValue,
      password: passwordValue,
      firstName,
      lastName,
    });
    return res.status(200).json(response);
  } catch (error) {
    console.error("Register Error:", error);
    return InternalServerError(res);
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { error } = Joi.object({
      email,
      password: Joi.string().required(),
    }).validate(req.body);
    if (error) {
      console.log("Validation Error:", error.details[0].message);
      return badRequest(error.details[0].message, res);
    }
    const response = await services.login(req.body);
    return res.status(200).json(response);
  } catch (error) {
    console.log("Login System Error:", error);
    return InternalServerError(res);
  }
};
