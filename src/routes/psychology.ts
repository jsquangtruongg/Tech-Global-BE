import * as controllers from "../controllers/psychology";
import express from "express";
import { verifyToken } from "../middlewares/verify_token";
import { isModeratorOrAdmin } from "../middlewares/verify_roles";
import * as savedControllers from "../controllers/psychology-collection";

const router = express.Router();

router.get("/", controllers.getAll);
router.get("/saved", verifyToken, savedControllers.listMine);
router.get("/:id", controllers.getDetail);

router.post("/saved", verifyToken, savedControllers.addMine);
router.delete("/saved/:id", verifyToken, savedControllers.removeMine);

router.use(verifyToken);
router.use(isModeratorOrAdmin);
router.post("/", controllers.create);
router.put("/:id", controllers.update);
router.delete("/:id", controllers.remove);

export default router;
