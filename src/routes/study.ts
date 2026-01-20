import express from "express";
import * as controllers from "../controllers/study";
import multer from "multer";
import { verifyToken } from "../middlewares/verify_token";
import { isModeratorOrAdmin } from "../middlewares/verify_roles";

const router = express.Router();
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 5 * 1024 * 1024 },
});

router.get("/", controllers.getAllStudies);
router.get("/:id", controllers.getStudyById);
router.post("/", controllers.createStudy);
router.put("/:id", controllers.updateStudy);
router.delete("/:id", controllers.deleteStudy);
router.post(
  "/upload-media",
  verifyToken,
  isModeratorOrAdmin,
  upload.single("image"),
  controllers.uploadStudyMedia
);

export default router;
