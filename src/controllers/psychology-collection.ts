import { Request, Response } from "express";
import * as services from "../services/psychology-collection";
import { InternalServerError, badRequest } from "../middlewares/handle_error";
 
export const listMine = async (req: Request, res: Response) => {
  try {
    const { id } = (req as any).user || {};
    if (!id) return badRequest("Thiếu thông tin user từ token", res);
    const response = await services.listMine(Number(id), req.query);
    return res.status(200).json(response);
  } catch (error) {
    return InternalServerError(res);
  }
};
 
export const addMine = async (req: Request, res: Response) => {
  try {
    const { id } = (req as any).user || {};
    if (!id) return badRequest("Thiếu thông tin user từ token", res);
    const { psychology_id } = req.body || {};
    if (!psychology_id) return badRequest("Thiếu psychology_id", res);
    const response = await services.addMine(Number(id), Number(psychology_id));
    return res.status(200).json(response);
  } catch (error) {
    return InternalServerError(res);
  }
};
 
export const removeMine = async (req: Request, res: Response) => {
  try {
    const { id } = (req as any).user || {};
    if (!id) return badRequest("Thiếu thông tin user từ token", res);
    const { id: savedId } = req.params;
    if (!savedId) return badRequest("Thiếu id mục sưu tầm", res);
    const response = await services.removeMine(Number(id), Number(savedId));
    return res.status(200).json(response);
  } catch (error) {
    return InternalServerError(res);
  }
};
