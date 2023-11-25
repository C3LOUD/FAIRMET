import { Flex } from "@chakra-ui/react";
import { PropsWithChildren } from "react";
import { TBook } from "../types";
import BookCard from "./BookCard";

type Props = {
  books: TBook[];
};

const BookList: React.FC<PropsWithChildren<Props>> = ({ books, children }) => {
  return (
    <Flex
      w="100%"
      alignItems="center"
      justifyContent="center"
      direction="column"
    >
      {books.map((book, i) => (
        <BookCard key={book.id} book={book} />
      ))}
      {children}
    </Flex>
  );
};

export default BookList;
