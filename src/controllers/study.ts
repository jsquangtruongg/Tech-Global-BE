import { Request, Response } from "express";
import * as services from "../services/study";

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
