export type User = {
  id: number;
  name: string;
  email: string;
  password: number;
  score: number;
};

export type UserScore = User['score'];
