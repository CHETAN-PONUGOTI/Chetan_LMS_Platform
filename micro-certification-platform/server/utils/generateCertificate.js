const { PDFDocument, rgb, StandardFonts } = require('pdf-lib');

async function generateCertificatePdf({ name, quizTitle, score, date }) {
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage([792, 612]); // Standard US Letter landscape
  const { width, height } = page.getSize();

  // Draw a border
  page.drawRectangle({
    x: 20,
    y: 20,
    width: width - 40,
    height: height - 40,
    borderColor: rgb(0.1, 0.5, 0.8),
    borderWidth: 2,
  });

  // Fonts
  const helveticaBoldFont = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica);

  // Title
  page.drawText('Certificate of Completion', {
    x: 180,
    y: height - 100,
    font: helveticaBoldFont,
    size: 40,
    color: rgb(0, 0, 0),
  });
  
  // "This certifies that"
  page.drawText('This certifies that', {
    x: 300,
    y: height - 180,
    font: helveticaFont,
    size: 24,
  });

  // Student Name
  page.drawText(name, {
    x: (width - helveticaBoldFont.widthOfTextAtSize(name, 36)) / 2,
    y: height - 250,
    font: helveticaBoldFont,
    size: 36,
    color: rgb(0.1, 0.5, 0.8),
  });

  // "has successfully completed the"
  page.drawText('has successfully completed the', {
    x: 250,
    y: height - 320,
    font: helveticaFont,
    size: 24,
  });

  // Quiz Title
  page.drawText(quizTitle, {
    x: (width - helveticaBoldFont.widthOfTextAtSize(quizTitle, 32)) / 2,
    y: height - 380,
    font: helveticaBoldFont,
    size: 32,
  });

  // Score
  page.drawText(`with a score of ${score.toFixed(0)}%`, {
    x: 290,
    y: height - 440,
    font: helveticaFont,
    size: 24,
  });
  
  // Date
  page.drawText(`Date: ${date}`, {
    x: 100,
    y: 100,
    font: helveticaFont,
    size: 18,
  });

  const pdfBytes = await pdfDoc.save();
  return pdfBytes;
}

module.exports = { generateCertificatePdf };