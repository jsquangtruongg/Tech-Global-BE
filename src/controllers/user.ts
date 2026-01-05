import * as services from "../services/user";
import { InternalServerError, badRequest } from "../middlewares/handle_error";
import { Request, Response } from "express";

export const createUser = async (req: Request, res: Response) => {
  try {
    const { email, password, name, role } = req.body;
    if (!email || !password || !name || !role)
      return badRequest("Thiếu thông tin tạo người dùng", res);
    const response = await services.createUser(req.body);
    return res.status(200).json(response);
  } catch (error) {
    return InternalServerError(res);
  }
};

export const getCurrent = async (req: Request, res: Response) => {
  try {
    const { id } = (req as any).user;
    const response = await services.getOne(id);
    return res.status(200).json(response);
  } catch (error) {
    return InternalServerError(res);
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const { id } = (req as any).user;
    const payload = req.body;
    if (!payload) return badRequest("Thiếu thông tin cập nhật", res);

    // Prevent updating sensitive fields
    delete payload.role_code;
    delete payload.role;
    delete payload.password;

    const response = await services.updateUser(id, payload);
    return res.status(200).json(response);
  } catch (error) {
    return InternalServerError(res);
  }
};

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const response = await services.getAllUsers(req.query);
    return res.status(200).json(response);
  } catch (error) {
    return InternalServerError(res);
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.query;
    if (!id) return badRequest("Thiếu ID người dùng", res);
    const response = await services.deleteUser(+id);
    return res.status(200).json(response);
  } catch (error) {
    return InternalServerError(res);
  }
};

export const updateUserByAdmin = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    if (!id) return badRequest("Thiếu ID người dùng", res);

    const { role, ...rest } = req.body;
    const payload = { ...rest };
    if (role) {
      if (role === "admin") payload.role_code = "R1";
      else if (role === "staff") payload.role_code = "R2";
      else if (role === "customer") payload.role_code = "R3";
    }

    const response = await services.updateUser(+id, payload);
    return res.status(200).json(response);
  } catch (error) {
    return InternalServerError(res);
  }
};
