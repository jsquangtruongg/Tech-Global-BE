import express from "express";
import * as controllers from "../controllers/analytics";

const router = express.Router();

router.get("/dashboard", controllers.getDashboardData);
router.get("/gold-news", controllers.getGoldNews);
router.get("/gold-chart", controllers.getGoldChartData);

export default router;
