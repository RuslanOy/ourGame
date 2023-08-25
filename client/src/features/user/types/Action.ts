import { User } from './types';

export type Action =
  | { type: 'user/addScore', payload: number }
  | { type: 'user/register', payload: User }
  | { type: 'auth/check', payload: User }
  | { type: 'auth/logout' };
