import * as controllers from "../controllers/postNew";
import express from "express";
import { verifyToken } from "../middlewares/verify_token";
import { isAdmin, isModeratorOrAdmin } from "../middlewares/verify_roles";
import multer from "multer";

const router = express.Router();
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 5 * 1024 * 1024 },
});

router.get("/all", controllers.getAllPosts);
router.get("/:id", controllers.getPostDetail);

router.use(verifyToken);

router.post("/", isModeratorOrAdmin, controllers.createPost);
router.post(
  "/upload-image",
  isModeratorOrAdmin,
  upload.single("image"),
  controllers.uploadPostImage
);
router.put("/:id", isModeratorOrAdmin, controllers.updatePost);
router.delete("/:id", isAdmin, controllers.deletePost);

export default router;
