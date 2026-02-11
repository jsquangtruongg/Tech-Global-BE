import * as controllers from "../controllers/common-error";
import { Router } from "express";

const router = Router();

router.get("/", controllers.getAll);
router.get("/:id", controllers.getDetail);
router.post("/", controllers.create);
router.put("/:id", controllers.update);
router.delete("/:id", controllers.remove);

export default router;
