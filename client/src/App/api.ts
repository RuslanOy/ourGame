import { Theme } from '../features/game/types/types';

export const fetchQuestions = async (): Promise<Theme[]> => {
  const res = await fetch('/api/questions');
  return res.json();
};
