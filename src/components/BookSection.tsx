import { Button, HStack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { TBook } from "../types";
import { getBooks } from "../util/getBooks";
import BookList from "./BookList";
import ThinContainer from "./ThinContainer";

const bookFilter = ["ALL", "PICK", "WEAR", "STYLE", "OTHER"];
const totalLimit = 7;
const moreCount = 3;

const BookSection = () => {
  const [books, setBooks] = useState<TBook[]>([]);
  const [limit, setLimit] = useState<number>(4);
  const [active, setActive] = useState<string>("ALL");

  useEffect(() => {
    getBooks({ limit, category: active }).then((res) => {
      setBooks(res);
    });
  }, [limit, active]);

  return (
    <ThinContainer>
      <Text w="100%" textAlign="center">
        {"Discover \u0026 Share More with You"}
      </Text>
      <HStack
        display="flex"
        borderBottom="1px"
        borderBottomStyle="solid"
        borderBottomColor="shade.500"
      >
        {bookFilter.map((filter, i) => (
          <Button
            fontSize={active === filter ? 28 : 20}
            _hover={{
              border: "none",
              fontSize: active === filter ? 28 : 24,
            }}
            transition="all 0.2s ease-in-out"
            h="2rem"
            variant="link"
            flex="1"
            key={i}
            type="button"
            fontWeight="400"
            fontStyle="italic"
            onClick={(e) => {
              e.preventDefault();
              setActive(filter);
              setLimit(4);
            }}
          >
            {filter}
          </Button>
        ))}
      </HStack>
      <BookList books={books}>
        {limit < totalLimit && books.length <= limit && (
          <Button
            variant="outline"
            type="button"
            onClick={(e) => {
              e.preventDefault();
              setLimit((prev) => prev + moreCount);
            }}
          >
            {"View More"}
          </Button>
        )}
      </BookList>
    </ThinContainer>
  );
};

export default BookSection;
