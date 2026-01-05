import * as services from "../services/payment";
import { InternalServerError, badRequest } from "../middlewares/handle_error";
import { Request, Response } from "express";

export const createLink = async (req: Request, res: Response) => {
  try {
    const { id } = (req as any).user;
    const { courseId, couponCode, discountPercent } = req.body;
    if (!courseId) return badRequest("Thiếu courseId", res);
    const response = await services.createPaymentLink(
      id,
      +courseId,
      couponCode,
      discountPercent
    );
    return res.status(200).json(response);
  } catch (error: any) {
    return res.status(500).json({
      err: 1,
      mess: "Internal Server Error",
      detail: error?.message,
      stack: error?.stack,
    });
  }
};

export const webhook = async (req: Request, res: Response) => {
  try {
    const response = await services.verifyWebhook(req.body);
    return res.status(200).json(response);
  } catch (error) {
    return InternalServerError(res);
  }
};

export const status = async (req: Request, res: Response) => {
  try {
    const { id } = (req as any).user;
    const { orderCode } = req.params;
    const response = await services.getOrderStatus(id, String(orderCode));
    return res.status(200).json(response);
  } catch (error) {
    return InternalServerError(res);
  }
};
