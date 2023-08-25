export type User = {
  id?: number;
  name: string;
  email: string;
  password: string;
  score: number;
};

export type UserSign = {
  id?: number;
  email: string;
  password: string;
};

export type UserScore = User['score'];
