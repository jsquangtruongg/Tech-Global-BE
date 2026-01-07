import express from "express";
import * as controllers from "../controllers/study";

const router = express.Router();

router.get("/", controllers.getAllStudies);
router.get("/:id", controllers.getStudyById);
router.post("/", controllers.createStudy);
router.put("/:id", controllers.updateStudy);
router.delete("/:id", controllers.deleteStudy);

export default router;
