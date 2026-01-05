import express from "express";
import * as controllers from "../controllers/interview";

const router = express.Router();

router.get("/tree", controllers.getInterviewTree);

// Topics
router.get("/topics", controllers.getTopics);
router.post("/topic", controllers.createTopic);
router.put("/topic/:id", controllers.updateTopic);
router.delete("/topic/:id", controllers.deleteTopic);

// Sections
router.get("/sections", controllers.getSections);
router.post("/section", controllers.createSection);
router.put("/section/:id", controllers.updateSection);
router.delete("/section/:id", controllers.deleteSection);

// Questions
router.get("/questions", controllers.getQuestions);
router.post("/question", controllers.createQuestion);
router.put("/question/:id", controllers.updateQuestion);
router.delete("/question/:id", controllers.deleteQuestion);

export default router;
