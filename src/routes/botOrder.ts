import * as controllers from "../controllers/botOrder";
import express from "express";
import { verifyToken } from "../middlewares/verify_token";
import { isAdmin } from "../middlewares/verify_roles";

const router = express.Router();

router.use(verifyToken);

router.get("/my", controllers.getMyOrders);

router.use(isAdmin);

router.get("/", controllers.getAll);
router.get("/:id", controllers.getDetail);
router.put("/:id", controllers.update);
router.delete("/:id", controllers.remove);

export default router;

