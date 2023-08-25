export type User = {
  id?: number;
  name: string;
  email: string;
  password: string;
  score: number;
};

export type UserScore = User['score'];
