const express = require('express');
const router = express.Router();
const { submitQuiz } = require('../controllers/resultController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/submit', authMiddleware, submitQuiz);

module.exports = router;