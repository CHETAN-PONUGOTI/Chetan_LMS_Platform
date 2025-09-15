const express = require('express');
const router = express.Router();
const { getQuizQuestions } = require('../controllers/quizController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/:quizId', authMiddleware, getQuizQuestions);

module.exports = router;