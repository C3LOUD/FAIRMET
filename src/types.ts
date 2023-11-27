export type Brand = {
  id: string;
  title: string;
  tags: {
    Sort: string[];
    "Style, Occasion & Dressing Type": string[];
    Field: string[];
    "Item & Category": string[];
    "Specific Item": string[];
    "Function & Activity": string[];
    "Country & Region": string[];
    Price: string[];
    Gender: string[];
  };
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
  tags: {
    Sort: string[];
    "Style, Occasion & Dressing Type": string[];
    Field: string[];
    "Item & Category": string[];
    "Specific Item": string[];
    "Function & Activity": string[];
    "Country & Region": string[];
    Price: string[];
    Gender: string[];
  };
  title: string;
  content: string;
  image: string;
};

export type TagKey = keyof TBook["tags"];
