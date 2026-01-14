import * as controllers from "../controllers/course";
import express from "express";
import { verifyToken } from "../middlewares/verify_token";
import { isAdmin, isModeratorOrAdmin } from "../middlewares/verify_roles";
import multer from "multer";

const router = express.Router();
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 5 * 1024 * 1024 },
});

router.get("/all", controllers.getAllCourses);
router.get("/:id", controllers.getCourseDetail);

router.use(verifyToken);

router.post("/", isModeratorOrAdmin, controllers.createCourse);
router.post(
  "/upload-image",
  isModeratorOrAdmin,
  upload.single("image"),
  controllers.uploadCourseImage
);
router.put("/:id", isModeratorOrAdmin, controllers.updateCourse);
router.delete("/:id", isAdmin, controllers.deleteCourse);

export default router;
