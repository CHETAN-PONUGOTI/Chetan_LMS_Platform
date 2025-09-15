import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import CertificateButton from '../components/Result/CertificateButton.jsx';

function ResultPage() {
  const { state } = useLocation();
  const { resultId } = useParams();
  
  // The result data is passed from QuizPage after submission
  const result = state?.result;

  // This prevents an error if someone navigates to the result page directly
  if (!result) {
    return (
      <div>
        <h1>Result Not Found</h1>
        <p>Please complete a quiz to see your result.</p>
      </div>
    );
  }
  
  return (
    <div>
      <h1>Quiz Result</h1>
      <h2>{result.quizTitle}</h2>
      <p>Your Score: <strong>{result.score.toFixed(0)}%</strong></p>
      <h3 style={{ color: result.passed ? 'green' : 'red' }}>
        Status: {result.passed ? 'Passed' : 'Failed'}
      </h3>
      <CertificateButton resultId={resultId} canDownload={result.passed} />
    </div>
  );
}

export default ResultPage;