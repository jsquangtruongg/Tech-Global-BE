import * as controllers from "../controllers/user";
import express from "express";
import { verifyToken } from "../middlewares/verify_token";
import { isAdmin } from "../middlewares/verify_roles";

const router = express.Router();

// Public routes

// Private routes (yêu cầu đăng nhập)
router.use(verifyToken);
router.get("/", controllers.getCurrent);
router.put("/", controllers.updateUser);
router.post("/activity", controllers.recordActivity);
router.get("/activity/stats", isAdmin, controllers.getActivityStats);

// Admin routes
router.post("/", isAdmin, controllers.createUser);
router.get("/all", isAdmin, controllers.getAllUsers);
router.delete("/", isAdmin, controllers.deleteUser);
router.put("/:id", isAdmin, controllers.updateUserByAdmin);

export default router;
