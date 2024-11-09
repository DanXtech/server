const Chapter = require("../models/Chapter");
const Question = require("../models/Question");

exports.addChapter = async (req, res) => {
  try {
    const chapter = req.body;
    const newChapter = await Chapter.create(chapter);
    res.json({ chapter: newChapter });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Endpoint to create a question
exports.addQuestion = async (req, res) => {
  try {
    const {
      chapterId,
      questionText,
      options,
      answers,
      correctAnswer,
      difficulty,
      hint,
      chapter,
      page,
    } = req.body;

    const question = new Question({
      chapterId,
      questionText,
      options,
      answers,
      correctAnswer,
      difficulty,
      hint,
      chapter,
      page,
    });

    const savedQuestion = await question.save();
    res.json(savedQuestion);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all questions for a specific chapter
exports.getQuestionsByChapter = async (req, res) => {
  try {
    const { chapterId } = req.params;
    const questions = await Question.find({ chapterId });
    res.json(questions);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch questions" });
  }
};

exports.uploadQuestion = async (req, res) => {
  try {
    const questions = req.body;

    if (Array.isArray(questions) && questions) {
      questions.map((question, index) => {
        const newQuestion = new Question(question);

        newQuestion.save();

        res.status(201).json({ newQuestion });
      });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// http://localhost:5000/api/chapters/FA/questions

// Get all chapters
exports.getChapters = async (req, res) => {
  try {
    const chapters = await Chapter.find();
    res.json(chapters);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch chapters" });
  }
};
