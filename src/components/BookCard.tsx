import { Card, CardBody, CardHeader, Text } from "@chakra-ui/react";
import React from "react";
import { TBook } from "../types";

type Props = {
  book: TBook;
};

const BookCard: React.FC<Props> = ({ book }) => {
  return (
    <Card w="100%">
      <CardHeader>{book.title}</CardHeader>
      <CardBody>
        <Text>{book.category}</Text>
      </CardBody>
    </Card>
  );
};

export default BookCard;
