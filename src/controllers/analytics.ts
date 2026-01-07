import { Request, Response } from "express";
import * as services from "../services/analytics";

export const getDashboardData = async (req: Request, res: Response) => {
  try {
    const response = await services.getDashboardData();
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      err: -1,
      mess: "Internal Server Error",
    });
  }
};
