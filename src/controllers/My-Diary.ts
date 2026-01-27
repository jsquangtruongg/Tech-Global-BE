import { Request, Response } from "express";
import * as services from "../services/My-Diary";
import { InternalServerError, badRequest } from "../middlewares/handle_error";

export const getMyDiaries = async (req: Request, res: Response) => {
  try {
    const { id } = (req as any).user || {};
    if (!id) return badRequest("Thiếu thông tin user từ token", res);
    const response = await services.listMyDiaries(Number(id), req.query);
    return res.status(200).json(response);
  } catch (error) {
    return InternalServerError(res);
  }
};

export const getMyDiaryDetail = async (req: Request, res: Response) => {
  try {
    const { id: userId } = (req as any).user || {};
    if (!userId) return badRequest("Thiếu thông tin user từ token", res);
    const { id } = req.params;
    if (!id) return badRequest("Thiếu id nhật ký", res);
    const response = await services.getMyDiaryDetail(
      Number(userId),
      Number(id),
    );
    return res.status(200).json(response);
  } catch (error) {
    return InternalServerError(res);
  }
};

export const createMyDiary = async (req: Request, res: Response) => {
  try {
    const { id } = (req as any).user || {};
    if (!id) return badRequest("Thiếu thông tin user từ token", res);
    const response = await services.createMyDiary(Number(id), req.body);
    return res.status(200).json(response);
  } catch (error) {
    return InternalServerError(res);
  }
};

export const updateMyDiary = async (req: Request, res: Response) => {
  try {
    const { id: userId } = (req as any).user || {};
    if (!userId) return badRequest("Thiếu thông tin user từ token", res);
    const { id } = req.params;
    if (!id) return badRequest("Thiếu id nhật ký", res);
    const response = await services.updateMyDiary(
      Number(userId),
      Number(id),
      req.body,
    );
    return res.status(200).json(response);
  } catch (error) {
    return InternalServerError(res);
  }
};

export const deleteMyDiary = async (req: Request, res: Response) => {
  try {
    const { id: userId } = (req as any).user || {};
    if (!userId) return badRequest("Thiếu thông tin user từ token", res);
    const { id } = req.params;
    if (!id) return badRequest("Thiếu id nhật ký", res);
    const response = await services.deleteMyDiary(Number(userId), Number(id));
    return res.status(200).json(response);
  } catch (error) {
    return InternalServerError(res);
  }
};

export const adminList = async (req: Request, res: Response) => {
  try {
    const response = await services.listAllDiaries(req.query);
    return res.status(200).json(response);
  } catch (error) {
    return InternalServerError(res);
  }
};

export const adminDetail = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    if (!id) return badRequest("Thiếu id nhật ký", res);
    const response = await services.getDiaryDetailAdmin(Number(id));
    return res.status(200).json(response);
  } catch (error) {
    return InternalServerError(res);
  }
};

export const adminDelete = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    if (!id) return badRequest("Thiếu id nhật ký", res);
    const response = await services.deleteDiaryAdmin(Number(id));
    return res.status(200).json(response);
  } catch (error) {
    return InternalServerError(res);
  }
};
