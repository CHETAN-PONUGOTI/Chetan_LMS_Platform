const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
  quizId: { type: String, required: true, index: true },
  quizTitle: { type: String, required: true },
  questionText: { type: String, required: true },
  options: [{
    text: { type: String, required: true },
    isCorrect: { type: Boolean, required: true, default: false }
  }],
});

module.exports = mongoose.model('Question', QuestionSchema);