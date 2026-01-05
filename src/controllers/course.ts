import * as services from "../services/course";
import { InternalServerError, badRequest } from "../middlewares/handle_error";
import { Request, Response } from "express";

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
