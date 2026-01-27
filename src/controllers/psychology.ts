import { Request, Response } from "express";
import * as services from "../services/psychology";
import { InternalServerError, badRequest } from "../middlewares/handle_error";

export const getAll = async (req: Request, res: Response) => {
  try {
    const response = await services.list(req.query);
    return res.status(200).json(response);
  } catch (error) {
    return InternalServerError(res);
  }
};

export const getDetail = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    if (!id) return badRequest("Thiếu id bài psychology", res);
    const response = await services.detail(Number(id));
    return res.status(200).json(response);
  } catch (error) {
    return InternalServerError(res);
  }
};

export const create = async (req: Request, res: Response) => {
  try {
    const response = await services.create(req.body);
    return res.status(200).json(response);
  } catch (error) {
    return InternalServerError(res);
  }
};

export const update = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    if (!id) return badRequest("Thiếu id bài psychology", res);
    const response = await services.update(Number(id), req.body);
    return res.status(200).json(response);
  } catch (error) {
    return InternalServerError(res);
  }
};

export const remove = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    if (!id) return badRequest("Thiếu id bài psychology", res);
    const response = await services.remove(Number(id));
    return res.status(200).json(response);
  } catch (error) {
    return InternalServerError(res);
  }
};
