import * as controllers from "../controllers/knowledge";
import express from "express";
import multer from "multer";
import { verifyToken } from "../middlewares/verify_token";
import { isModeratorOrAdmin } from "../middlewares/verify_roles";

const router = express.Router();
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 5 * 1024 * 1024 },
});

router.get("/", controllers.getAll);
router.get("/:id", controllers.getDetail);

router.use(verifyToken);
router.use(isModeratorOrAdmin);
router.post("/", controllers.create);
router.put("/:id", controllers.update);
router.delete("/:id", controllers.remove);
router.post("/upload-image", upload.single("image"), controllers.uploadImage);

export default router;
