const Question = require('../models/Question');

exports.getQuizQuestions = async (req, res) => {
  try {
    const questions = await Question.find({ quizId: req.params.quizId }).select('-options.isCorrect');
    if (!questions || questions.length === 0) {
      return res.status(404).json({ msg: 'Quiz not found' });
    }
    res.json(questions);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};