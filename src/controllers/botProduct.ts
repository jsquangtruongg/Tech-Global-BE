import * as services from "../services/botProduct";
import { InternalServerError, badRequest } from "../middlewares/handle_error";
import { Request, Response } from "express";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

export const getAll = async (req: Request, res: Response) => {
  try {
    const response = await services.getAllBotProducts(req.query);
    return res.status(200).json(response);
  } catch (error) {
    return InternalServerError(res);
  }
};

export const getActive = async (_req: Request, res: Response) => {
  try {
    const response = await services.getActiveBotProducts();
    return res.status(200).json(response);
  } catch (error) {
    return InternalServerError(res);
  }
};

export const getDetail = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    if (!id) return badRequest("Thiếu id gói bot", res);
    const response = await services.getBotProductDetail(Number(id));
    return res.status(200).json(response);
  } catch (error) {
    return InternalServerError(res);
  }
};

export const create = async (req: Request, res: Response) => {
  try {
    const { code, name, monthly_usd, yearly_usd } = req.body || {};
    if (!code || !name || monthly_usd === undefined || yearly_usd === undefined)
      return badRequest("Thiếu thông tin bắt buộc", res);

    const response = await services.createBotProduct(req.body);
    return res.status(200).json(response);
  } catch (error) {
    return InternalServerError(res);
  }
};

export const update = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    if (!id) return badRequest("Thiếu id gói bot", res);
    const response = await services.updateBotProduct(Number(id), req.body);
    return res.status(200).json(response);
  } catch (error) {
    return InternalServerError(res);
  }
};

export const remove = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    if (!id) return badRequest("Thiếu id gói bot", res);
    const response = await services.deleteBotProduct(Number(id));
    return res.status(200).json(response);
  } catch (error) {
    return InternalServerError(res);
  }
};

export const uploadBotProductImage = async (req: Request, res: Response) => {
  try {
    const file = (req as any).file;
    if (!file) {
      return badRequest("Không có file ảnh được gửi lên", res);
    }

    if (
      !process.env.CLOUDINARY_NAME ||
      !process.env.CLOUDINARY_KEY ||
      !process.env.CLOUDINARY_SECRET
    ) {
      return badRequest("Cloudinary chưa được cấu hình trên server", res);
    }

    const result: any = await new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        {
          folder: "tech-global/bot-products",
          resource_type: "image",
        },
        (error, result) => {
          if (error) reject(error);
          else resolve(result);
        }
      );
      uploadStream.end(file.buffer);
    });

    return res.status(200).json({
      err: 0,
      mes: "Upload ảnh bot thành công",
      mess: "Upload ảnh bot thành công",
      data: {
        url: result.secure_url,
        public_id: result.public_id,
      },
    });
  } catch (error) {
    return InternalServerError(res);
  }
};
