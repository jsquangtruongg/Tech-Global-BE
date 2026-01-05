import * as controllers from "../controllers/role";
import express from "express";
import { verifyToken } from "../middlewares/verify_token";
import { isAdmin } from "../middlewares/verify_roles";

const router = express.Router();

router.use(verifyToken);
router.use(isAdmin); // All role management requires Admin

router.get("/", controllers.getRoles);
router.post("/", controllers.createRole);
router.put("/", controllers.updateRole);
router.delete("/", controllers.deleteRole);

export default router;
