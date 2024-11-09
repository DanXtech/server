const express = require("express");
const {
  getChapters,
  getQuestionsByChapter,
  addChapter,
  addQuestion,
} = require("../controllers/quizController");

const router = express.Router();
router.post("/add-chapter", addChapter);
router.get("/chapters", getChapters);
router.get("/chapters/:chapterId/questions", getQuestionsByChapter);
router.post("/add-questions", addQuestion);

// router.get("/chapters", getChapters).get("/chapters/:chapterId/questions", getQuestionsByChapter);

module.exports = router;
