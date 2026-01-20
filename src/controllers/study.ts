import { Request, Response } from "express";
import * as services from "../services/study";
import { v2 as cloudinary } from "cloudinary";
import { InternalServerError, badRequest } from "../middlewares/handle_error";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

export const getAllStudies = async (req: Request, res: Response) => {
  try {
    const { sectionId } = req.query;
    const response = await services.getAllStudies(sectionId ? Number(sectionId) : undefined);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ err: -1, mess: "Internal Server Error" });
  }
};

export const getStudyById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const response = await services.getStudyById(Number(id));
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ err: -1, mess: "Internal Server Error" });
  }
};

export const createStudy = async (req: Request, res: Response) => {
  try {
    const response = await services.createStudy(req.body);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ err: -1, mess: "Internal Server Error" });
  }
};

export const updateStudy = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const response = await services.updateStudy(Number(id), req.body);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ err: -1, mess: "Internal Server Error" });
  }
};

export const deleteStudy = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const response = await services.deleteStudy(Number(id));
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ err: -1, mess: "Internal Server Error" });
  }
};

export const uploadStudyMedia = async (req: Request, res: Response) => {
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
          folder: "tech-global/studies",
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
      mes: "Upload media thành công",
      mess: "Upload media thành công",
      data: {
        url: result.secure_url,
        public_id: result.public_id,
      },
    });
  } catch (error) {
    return InternalServerError(res);
  }
};
