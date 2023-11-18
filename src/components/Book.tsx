import { Box, Heading } from "@chakra-ui/react";
import React from "react";

type Props = {};

const Book = (props: Props) => {
  return (
    <Box as="section">
      <Heading borderBottom="2px">
        {"Book 記事一覧 \uFF08TOP: Colume, Book, News\uFF09"}
      </Heading>
    </Box>
  );
};

export default Book;
