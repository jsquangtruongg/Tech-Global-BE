import * as controllers from "../controllers/payment";
import express from "express";
import { verifyToken } from "../middlewares/verify_token";

const router = express.Router();

router.post("/webhook", controllers.webhook);

router.use(verifyToken);
router.post("/create-link", controllers.createLink);
router.get("/status/:orderCode", controllers.status);

export default router;
