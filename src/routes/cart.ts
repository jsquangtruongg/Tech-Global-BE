import * as controllers from "../controllers/cart";
import express from "express";
import { verifyToken } from "../middlewares/verify_token";

const router = express.Router();

router.use(verifyToken);

router.post("/", controllers.addToCart);
router.get("/", controllers.getCart);
router.delete("/:courseId", controllers.removeFromCart);

export default router;
