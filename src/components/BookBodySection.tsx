import { Box, Button, HStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { TBook } from "../types";
import { getBooks } from "../util/getBooks";
import { getFilters } from "../util/getFilters";
import BookList from "./BookList";
import FindMoreBtn from "./FindMoreBtn";
import ThinContainer from "./ThinContainer";
import ViewMoreBtn from "./ViewMoreBtn";

const totalLimit = 7;
const moreCount = 3;
const initLimit = 4;

const BookBodySection = () => {
  const [books, setBooks] = useState<TBook[]>([]);
  const [limit, setLimit] = useState<number>(initLimit);
  const [active, setActive] = useState<string>();
  const [filterArr, setFilterArr] = useState<string[]>([]);

  useEffect(() => {
    getBooks({ limit, tag: active }).then((res) => {
      setBooks(res);
    });
  }, [limit, active]);

  useEffect(() => {
    getFilters().then((res) =>
      setFilterArr(res.find((el) => el.type === "Item & Category")!.options)
    );
  }, []);

  return (
    <>
      <Box overflow="hidden">
        <HStack
          overflowX="scroll"
          borderY="solid 1px"
          py="0.5rem"
          mb="2rem"
          h="3.5rem"
          css={{
            "&::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          <HStack w="max-content">
            {filterArr.length !== 0 &&
              filterArr.map((option, i) => (
                <Button
                  key={i}
                  textColor="secondary"
                  fontSize={active === option ? 24 : 16}
                  transition="all 0.2s"
                  variant="link"
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    setActive(option);
                    setLimit(initLimit);
                  }}
                >
                  {option}
                </Button>
              ))}
          </HStack>
        </HStack>
      </Box>
      <ThinContainer>
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
    </>
  );
};

export default BookBodySection;
