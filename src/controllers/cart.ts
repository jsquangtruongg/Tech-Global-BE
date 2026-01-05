import * as services from "../services/cart";
import { InternalServerError } from "../middlewares/handle_error";
import { Request, Response } from "express";

export const addToCart = async (req: Request, res: Response) => {
  try {
    const { id } = (req as any).user; // Assuming verifyToken middleware adds user to req
    const { courseId } = req.body;
    if (!courseId) {
      return res.status(400).json({
        err: 1,
        mess: "Missing courseId",
      });
    }
    const response = await services.addToCart(id, courseId);
    return res.status(200).json(response);
  } catch (error) {
    return InternalServerError(res);
  }
};

export const getCart = async (req: Request, res: Response) => {
  try {
    const { id } = (req as any).user;
    const response = await services.getCart(id);
    return res.status(200).json(response);
  } catch (error) {
    return InternalServerError(res);
  }
};

export const removeFromCart = async (req: Request, res: Response) => {
  try {
    const { id } = (req as any).user;
    const { courseId } = req.params;
    const response = await services.removeFromCart(id, +courseId);
    return res.status(200).json(response);
  } catch (error) {
    return InternalServerError(res);
  }
};
