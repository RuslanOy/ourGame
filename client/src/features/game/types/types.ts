export type Question = {
  id: number;
  question: string;
  answer: string;
  price: number;
  Theme: { title: string };
};

export type Theme = Question[];
