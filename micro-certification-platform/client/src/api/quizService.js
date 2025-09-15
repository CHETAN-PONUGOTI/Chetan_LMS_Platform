import api from './api';

export const getQuiz = (quizId) => api.get(`/quizzes/${quizId}`);