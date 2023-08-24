export type Question = {
  id: number;
  q: string;
  a: string;
  price: number;
  theme_id: [string];
};

export type Theme = Question[];
