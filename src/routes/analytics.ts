import express from "express";
import * as controllers from "../controllers/analytics";

const router = express.Router();

router.get("/dashboard", controllers.getDashboardData);

export default router;
