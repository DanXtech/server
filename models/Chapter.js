const mongoose = require("mongoose");

const ChapterSchema = new mongoose.Schema({
  name: String,
  chapterId: String,
});

module.exports = mongoose.model("Chapter", ChapterSchema);
