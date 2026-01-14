import * as services from "../services/course";
import { InternalServerError, badRequest } from "../middlewares/handle_error";
import { Request, Response } from "express";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

export const getAllCourses = async (req: Request, res: Response) => {
  try {
    const response = await services.getAllCourses(req.query);
    return res.status(200).json(response);
  } catch (error: any) {
    console.log(error);
    return res.status(500).json({
      err: 1,
      mess: "Internal Server Error",
      detail: error.message,
      stack: error.stack,
    });
  }
};

export const getCourseDetail = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const response = await services.getCourseDetail(+id);
    return res.status(200).json(response);
  } catch (error) {
    return InternalServerError(res);
  }
};

export const createCourse = async (req: Request, res: Response) => {
  try {
    const response = await services.createCourse(req.body);
    return res.status(200).json(response);
  } catch (error) {
    return InternalServerError(res);
  }
};

export const updateCourse = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const response = await services.updateCourse(+id, req.body);
    return res.status(200).json(response);
  } catch (error) {
    return InternalServerError(res);
  }
};

export const deleteCourse = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const response = await services.deleteCourse(+id);
    return res.status(200).json(response);
  } catch (error) {
    return InternalServerError(res);
  }
};

export const uploadCourseImage = async (req: Request, res: Response) => {
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
          folder: "tech-global/courses",
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
      mes: "Upload ảnh khóa học thành công",
      mess: "Upload ảnh khóa học thành công",
      data: {
        url: result.secure_url,
        public_id: result.public_id,
      },
    });
  } catch (error) {
    return InternalServerError(res);
  }
};
