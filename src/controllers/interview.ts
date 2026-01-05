import { Request, Response } from "express";
import * as services from "../services/interview";

export const getInterviewTree = async (req: Request, res: Response) => {
  try {
    const { market } = req.query;
    const response = await services.getInterviewTree(market as string);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ err: -1, mess: "Internal Server Error" });
  }
};

// Topics
export const getTopics = async (req: Request, res: Response) => {
  try {
    const response = await services.getTopics();
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ err: -1, mess: "Internal Server Error" });
  }
};

export const createTopic = async (req: Request, res: Response) => {
  try {
    const response = await services.createTopic(req.body);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ err: -1, mess: "Internal Server Error" });
  }
};

export const updateTopic = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const response = await services.updateTopic(Number(id), req.body);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ err: -1, mess: "Internal Server Error" });
  }
};

export const deleteTopic = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const response = await services.deleteTopic(Number(id));
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ err: -1, mess: "Internal Server Error" });
  }
};

// Sections
export const getSections = async (req: Request, res: Response) => {
  try {
    const { topicId } = req.query;
    if (!topicId)
      return res.status(400).json({ err: 1, mess: "Missing topicId" });
    const response = await services.getSections(Number(topicId));
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ err: -1, mess: "Internal Server Error" });
  }
};

export const createSection = async (req: Request, res: Response) => {
  try {
    const response = await services.createSection(req.body);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ err: -1, mess: "Internal Server Error" });
  }
};

export const updateSection = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const response = await services.updateSection(Number(id), req.body);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ err: -1, mess: "Internal Server Error" });
  }
};

export const deleteSection = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const response = await services.deleteSection(Number(id));
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ err: -1, mess: "Internal Server Error" });
  }
};

// Questions
export const getQuestions = async (req: Request, res: Response) => {
  try {
    const { sectionId } = req.query;
    if (!sectionId)
      return res.status(400).json({ err: 1, mess: "Missing sectionId" });
    const response = await services.getQuestions(Number(sectionId));
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ err: -1, mess: "Internal Server Error" });
  }
};

export const createQuestion = async (req: Request, res: Response) => {
  try {
    const response = await services.createQuestion(req.body);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ err: -1, mess: "Internal Server Error" });
  }
};

export const updateQuestion = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const response = await services.updateQuestion(Number(id), req.body);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ err: -1, mess: "Internal Server Error" });
  }
};

export const deleteQuestion = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const response = await services.deleteQuestion(Number(id));
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ err: -1, mess: "Internal Server Error" });
  }
};
