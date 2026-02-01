import * as controllers from "../controllers/My-Diary";
import express from "express";
import { verifyToken } from "../middlewares/verify_token";
import { isAdmin } from "../middlewares/verify_roles";

const router = express.Router();

router.use(verifyToken);

router.get("/admin", isAdmin, controllers.adminList);
router.get("/admin/:id", isAdmin, controllers.adminDetail);
router.delete("/admin/:id", isAdmin, controllers.adminDelete);

// User routes (sau admin để tránh /:id bắt nhầm '/admin')
router.get("/", controllers.getMyDiaries);
router.get("/:id", controllers.getMyDiaryDetail);
router.post("/", controllers.createMyDiary);
router.put("/:id", controllers.updateMyDiary);
router.delete("/:id", controllers.deleteMyDiary);

export default router;
