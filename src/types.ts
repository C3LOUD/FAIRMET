export type Brand = {
  id: string;
  title: string;
  content: string;
};

export type Filter = {
  id: string;
  type: string;
  options: string[];
};

export type TBook = {
  id: string;
  category: string;
  title: string;
  content: string;
  image: string;
};
