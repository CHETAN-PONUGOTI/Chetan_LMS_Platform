const express = require('express');
const router = express.Router();
const { getCertificate } = require('../controllers/certificateController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/:resultId', authMiddleware, getCertificate);

module.exports = router;