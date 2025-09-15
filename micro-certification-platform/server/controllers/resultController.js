const Result = require('../models/Result');
const Question = require('../models/Question');

exports.submitQuiz = async (req, res) => {
  const { quizId, answers } = req.body;
  const userId = req.user.id;
  const PASS_PERCENTAGE = 70;

  try {
    const questions = await Question.find({ quizId });
    if (!questions || questions.length === 0) {
      return res.status(404).json({ msg: 'Quiz not found' });
    }

    let score = 0;
    let quizTitle = questions[0].quizTitle;

    questions.forEach(question => {
      const userAnswer = answers.find(ans => ans.questionId === question._id.toString());
      const correctAnswer = question.options.find(opt => opt.isCorrect);

      if (userAnswer && userAnswer.selectedOptionText === correctAnswer.text) {
        score++;
      }
    });

    const totalQuestions = questions.length;
    const scorePercentage = (score / totalQuestions) * 100;

    const newResult = new Result({
      userId,
      quizId,
      quizTitle,
      score: scorePercentage,
      totalQuestions,
      passed: scorePercentage >= PASS_PERCENTAGE,
    });

    await newResult.save();
    res.status(201).json(newResult);

  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};