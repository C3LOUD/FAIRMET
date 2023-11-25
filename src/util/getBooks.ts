import { faker } from "@faker-js/faker";
import { TBook } from "../types";

type Args = {
  limit?: number;
  category?: string;
};

export const getBooks = async ({ limit, category }: Args): Promise<TBook[]> => {
  const res = await fetch("/data/book.json", {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
  const json = await res.json();
  const books = [];
  for (const book of json.books) {
    if (limit && books.length >= limit) break;
    if (category && category !== "ALL" && category !== book.category) continue;
    book.image = faker.image.url();
    books.push(book);
  }

  return books;
};
