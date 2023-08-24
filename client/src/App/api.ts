import { Question } from '../features/game/types/types';

export const fetchQuestions = async (): Promise<Question[]> => {
  const res = await fetch('/api/questions');
  return res.json();
};
