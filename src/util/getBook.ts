import { faker } from "@faker-js/faker";
import { TBook } from "../types";

type Args = {
  id: string;
};

export const getBook = async ({ id }: Args): Promise<TBook> => {
  const res = await fetch("/data/book.json", {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
  const json = await res.json();
  const book = json.books.find((el: TBook) => el.id === id);
  book.image = faker.image.url();
  return book;
};
