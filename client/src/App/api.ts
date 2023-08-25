import { Theme } from '../features/game/types/types';
import { User, UserSign } from '../features/user/types/types';

export const fetchQuestions = async (): Promise<Theme[]> => {
  const res = await fetch('/api/questions');
  return res.json();
};

export const fetchSignIn = async (user: UserSign): Promise<User> => {
  const res = await fetch('/api/auth/authorization', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(user),
  });
  return res.json();
} 

export const fetchRegister = async (user: User): Promise<User> => {
  const res = await fetch('/api/auth/registration', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(user),
  });
  return res.json();
};

export const fetchCheckUser = async (): Promise<User> => {
  const res = await fetch('/api/auth/check');
  return res.json();
};

export const fetchLogOut = async (): Promise<{ message: string }> => {
  const res = await fetch('/api/auth/logout');
  return res.json();
};