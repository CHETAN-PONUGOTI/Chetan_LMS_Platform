import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getQuiz } from '../api/quizService';
import { submitAnswers } from '../api/resultService';
import Question from '../components/Quiz/Question';
import Options from '../components/Quiz/Options';
import Loader from '../components/Common/Loader';
import ProgressBar from '../components/Quiz/ProgressBar';

function QuizPage() {
  const { quizId } = useParams();
  const navigate = useNavigate();
  
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchQuiz = async () => {
      try {
        const { data } = await getQuiz(quizId);
        setQuestions(data);
      } catch (error) {
        console.error("Failed to fetch quiz", error);
      } finally {
        setLoading(false);
      }
    };
    fetchQuiz();
  }, [quizId]);

  const handleOptionSelect = (optionText) => {
    setUserAnswers({ ...userAnswers, [currentQuestionIndex]: optionText });
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handleSubmit = async () => {
    const formattedAnswers = questions.map((q, index) => ({
      questionId: q._id,
      selectedOptionText: userAnswers[index] || null,
    }));
    try {
      const { data } = await submitAnswers({ quizId, answers: formattedAnswers });
      navigate(`/result/${data._id}`, { state: { result: data } });
    } catch (error) {
      console.error("Error submitting quiz", error);
      alert("Failed to submit quiz.");
    }
  };

  if (loading) return <Loader />;
  if (questions.length === 0) return <p>Quiz not found or no questions available.</p>;

  const currentQuestion = questions[currentQuestionIndex];
  const selectedOption = userAnswers[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === questions.length - 1;

  return (
    <div>
      <h1>{currentQuestion.quizTitle}</h1>
      <ProgressBar current={currentQuestionIndex + 1} total={questions.length} />
      <Question text={currentQuestion.questionText} />
      <Options options={currentQuestion.options} selectedOption={selectedOption} onSelect={handleOptionSelect} />
      
      {isLastQuestion ? (
        <button onClick={handleSubmit} disabled={!selectedOption} style={{marginTop: '20px'}}>Submit Quiz</button>
      ) : (
        <button onClick={handleNext} disabled={!selectedOption} style={{marginTop: '20px'}}>Next</button>
      )}
    </div>
  );
}
export default QuizPage;