const Result = require('../models/Result');
const { generateCertificatePdf } = require('../utils/generateCertificate');

exports.getCertificate = async (req, res) => {
  try {
    const result = await Result.findById(req.params.resultId).populate('userId', 'name');

    if (!result) {
      return res.status(404).json({ msg: 'Result not found' });
    }
    
    // Authorization check: Ensure the user requesting is the one who owns the result
    if (result.userId._id.toString() !== req.user.id) {
        return res.status(401).json({ msg: 'User not authorized' });
    }
    
    if (!result.passed) {
        return res.status(400).json({ msg: 'Cannot generate certificate for a failed quiz.'});
    }

    const pdfBytes = await generateCertificatePdf({
        name: result.userId.name,
        quizTitle: result.quizTitle,
        score: result.score,
        date: result.date.toLocaleDateString(),
    });

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `attachment; filename=certificate.pdf`);
    res.send(Buffer.from(pdfBytes));

  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};