import * as controllers from "../controllers/course";
import express from "express";
import { verifyToken } from "../middlewares/verify_token";
import { isAdmin, isModeratorOrAdmin } from "../middlewares/verify_roles";

const router = express.Router();

// Public routes
router.get("/all", controllers.getAllCourses);
router.get("/:id", controllers.getCourseDetail);

// Private routes (require login)
router.use(verifyToken);

// Admin/Moderator routes
router.post("/", isModeratorOrAdmin, controllers.createCourse);
router.put("/:id", isModeratorOrAdmin, controllers.updateCourse);
router.delete("/:id", isAdmin, controllers.deleteCourse);

export default router;
