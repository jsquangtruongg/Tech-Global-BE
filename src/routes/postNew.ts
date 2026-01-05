import * as controllers from "../controllers/postNew";
import express from "express";
import { verifyToken } from "../middlewares/verify_token";
import { isAdmin, isModeratorOrAdmin } from "../middlewares/verify_roles";

const router = express.Router();

// Public routes
router.get("/all", controllers.getAllPosts);
router.get("/:id", controllers.getPostDetail);

// Private routes (require login)
router.use(verifyToken);

// Admin/Moderator routes
router.post("/", isModeratorOrAdmin, controllers.createPost);
router.put("/:id", isModeratorOrAdmin, controllers.updatePost);
router.delete("/:id", isAdmin, controllers.deletePost);

export default router;
