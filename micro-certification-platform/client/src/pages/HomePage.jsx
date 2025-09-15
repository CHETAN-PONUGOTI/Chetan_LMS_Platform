import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  // In a real app, you would fetch this list from an API
  const quizzes = [
    { id: 'javascript-basics', title: 'JavaScript Basics' },
    { id: 'react-fundamentals', title: 'React Fundamentals' },
  ];

  return (
    <div>
      <h1>Welcome to the Micro-Certification Platform</h1>
      <p>Select a quiz to test your knowledge and earn a certificate!</p>
      <h3>Available Quizzes:</h3>
      <ul>
        {quizzes.map(quiz => (
          <li key={quiz.id}>
            <Link to={`/quiz/${quiz.id}`}>{quiz.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;