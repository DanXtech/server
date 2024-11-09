// const mongoose = require("mongoose");

// const QuestionSchema = new mongoose.Schema({
//   chapterId: {
//     type: String,
//     enum: ["FA", "FDP", "AE"],
//     required: true,
//   },
//   questionText: { type: String, required: true },
//   answers: [{ type: String, required: true }],
//   correctAnswer: { type: Number, required: true },
//   difficulty: {
//     type: String,
//     enum: ["Easy", "Medium", "Hard"],
//     required: true,
//   },
//   hint: { type: String },
//   chapter: { type: Number, required: true },
//   page: { type: Number },
// });

// module.exports = mongoose.model("Question", QuestionSchema);

const mongoose = require("mongoose");

const QuestionSchema = new mongoose.Schema({
  chapterId: {
    type: String,
    enum: ["FA", "FDP", "AE"],
    required: true,
  },
  questionText: { type: String, required: true },
  answers: [{ type: String, required: true }], // Array of strings
  correctAnswer: { type: Number, required: true },
  difficulty: {
    type: String,
    enum: ["Easy", "Medium", "Hard"],
    required: true,
  },
  hint: { type: String },
  chapter: { type: Number, required: true },
  page: { type: Number },
});

module.exports = mongoose.model("Question", QuestionSchema);
