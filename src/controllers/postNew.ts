import * as services from "../services/postNew";
import { InternalServerError, badRequest } from "../middlewares/handle_error";
import { Request, Response } from "express";

export const getAllPosts = async (req: Request, res: Response) => {
  try {
    const response = await services.getAllPosts(req.query);
    return res.status(200).json(response);
  } catch (error) {
    return InternalServerError(res);
  }
};

export const getPostDetail = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const response = await services.getPostDetail(id);
    return res.status(200).json(response);
  } catch (error) {
    return InternalServerError(res);
  }
};

export const createPost = async (req: Request, res: Response) => {
  try {
    const { id } = (req as any).user;
    const response = await services.createPost({ ...req.body, author_id: id });
    return res.status(200).json(response);
  } catch (error) {
    return InternalServerError(res);
  }
};

export const updatePost = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const response = await services.updatePost(+id, req.body);
    return res.status(200).json(response);
  } catch (error) {
    return InternalServerError(res);
  }
};

export const deletePost = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const response = await services.deletePost(+id);
    return res.status(200).json(response);
  } catch (error) {
    return InternalServerError(res);
  }
};
