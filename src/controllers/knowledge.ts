import { Request, Response } from "express";
import * as services from "../services/knowledge";
import { InternalServerError, badRequest } from "../middlewares/handle_error";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

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
    if (!id) return badRequest("Thiếu id bài kiến thức", res);
    const response = await services.detail(String(id));
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
    if (!id) return badRequest("Thiếu id bài kiến thức", res);
    const response = await services.update(String(id), req.body);
    return res.status(200).json(response);
  } catch (error) {
    return InternalServerError(res);
  }
};

export const remove = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    if (!id) return badRequest("Thiếu id bài kiến thức", res);
    const response = await services.remove(String(id));
    return res.status(200).json(response);
  } catch (error) {
    return InternalServerError(res);
  }
};

export const uploadImage = async (req: Request, res: Response) => {
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
          folder: "tech-global/knowledge",
          resource_type: "image",
        },
        (error, result) => {
          if (error) reject(error);
          else resolve(result);
        },
      );
      uploadStream.end(file.buffer);
    });
    return res.status(200).json({
      err: 0,
      mes: "Upload ảnh thành công",
      mess: "Upload ảnh thành công",
      data: {
        url: result.secure_url,
        public_id: result.public_id,
      },
    });
  } catch (error) {
    return InternalServerError(res);
  }
};
