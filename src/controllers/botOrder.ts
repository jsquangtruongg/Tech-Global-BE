import * as services from "../services/botOrder";
import { InternalServerError, badRequest } from "../middlewares/handle_error";
import { Request, Response } from "express";

export const getMyOrders = async (req: Request, res: Response) => {
  try {
    const { id } = (req as any).user;
    const response = await services.getMyBotOrders(Number(id), req.query);
    return res.status(200).json(response);
  } catch (error) {
    return InternalServerError(res);
  }
};

export const getAll = async (req: Request, res: Response) => {
  try {
    const response = await services.getAllBotOrders(req.query);
    return res.status(200).json(response);
  } catch (error) {
    return InternalServerError(res);
  }
};

export const getDetail = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    if (!id) return badRequest("Thiếu id đơn hàng bot", res);
    const response = await services.getBotOrderDetail(Number(id));
    return res.status(200).json(response);
  } catch (error) {
    return InternalServerError(res);
  }
};

export const update = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    if (!id) return badRequest("Thiếu id đơn hàng bot", res);
    const response = await services.updateBotOrder(Number(id), req.body);
    return res.status(200).json(response);
  } catch (error) {
    return InternalServerError(res);
  }
};

export const remove = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    if (!id) return badRequest("Thiếu id đơn hàng bot", res);
    const response = await services.deleteBotOrder(Number(id));
    return res.status(200).json(response);
  } catch (error) {
    return InternalServerError(res);
  }
};

