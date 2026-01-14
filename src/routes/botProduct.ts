import * as controllers from "../controllers/botProduct";
import express from "express";
import { verifyToken } from "../middlewares/verify_token";
import { isAdmin } from "../middlewares/verify_roles";
import multer from "multer";

const router = express.Router();
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 5 * 1024 * 1024 },
});

router.get("/all", controllers.getActive);

router.use(verifyToken);
router.use(isAdmin);

router.get("/", controllers.getAll);
router.get("/:id", controllers.getDetail);
router.post("/", controllers.create);
router.post(
  "/upload-image",
  upload.single("image"),
  controllers.uploadBotProductImage
);
router.put("/:id", controllers.update);
router.delete("/:id", controllers.remove);

export default router;
