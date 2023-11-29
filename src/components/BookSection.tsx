import { Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { TBook } from "../types";
import { getBooks } from "../util/getBooks";
import BookFilter from "./BookFilter";
import BookList from "./BookList";
import FindMoreBtn from "./FindMoreBtn";
import ThinContainer from "./ThinContainer";
import ViewMoreBtn from "./ViewMoreBtn";

const totalLimit = 20;
const moreCount = 3;
const initLimit = 4;

const BookSection = () => {
  const [books, setBooks] = useState<TBook[]>([]);
  const [limit, setLimit] = useState<number>(initLimit);
  const [active, setActive] = useState<string>("ALL");

  useEffect(() => {
    getBooks({ limit, category: active }).then((res) => {
      setBooks(res);
    });
  }, [limit, active]);

  return (
    <ThinContainer>
      <Text
        w="100%"
        textAlign="center"
        bgColor="white"
        fontStyle="italic"
        fontSize={20}
        pb="1rem"
      >
        {"Discover \u0026 Share More with You"}
      </Text>
      <BookFilter
        active={active}
        setActive={setActive}
        resetState={() => {
          setLimit(initLimit);
        }}
      />
      <BookList books={books}>
        {limit < totalLimit && books.length <= limit ? (
          <ViewMoreBtn
            onClick={(e) => {
              e.preventDefault();
              setLimit((prev) => prev + moreCount);
            }}
          />
        ) : (
          <FindMoreBtn to={`/book#${active}`} />
        )}
      </BookList>
    </ThinContainer>
  );
};

export default BookSection;
