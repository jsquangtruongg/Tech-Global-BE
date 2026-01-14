import * as controllers from "../controllers/payment";
import express from "express";
import { verifyToken } from "../middlewares/verify_token";

const router = express.Router();

router.post("/webhook", controllers.webhook);
router.get("/bot-products", controllers.botProducts);

router.use(verifyToken);
router.post("/create-link", controllers.createLink);
router.post("/create-bot-link", controllers.createBotLink);
router.get("/status/:orderCode", controllers.status);
router.get("/bot-status/:orderCode", controllers.botStatus);

export default router;
