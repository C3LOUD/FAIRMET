import { Box, Center, Grid, Text } from "@chakra-ui/react";
import { faker } from "@faker-js/faker";
import { useEffect, useState } from "react";
import { BookTag, TBook } from "../types";
import { getBooks } from "../util/getBooks";
import BookFilter from "./BookFilter";
import BooksGridCard from "./BooksGridCard";
import { useNavigate } from "react-router-dom";

const row = 3;
const column = 6;
const gridLayout = [4, 2, 3, 3, 2, 2, 2];
const limit = gridLayout.length;

type Props = {
  active: BookTag;
};

const BookMainSection: React.FC<Props> = ({ active }) => {
  const [books, setBooks] = useState<TBook[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    getBooks({ limit, category: active }).then((res) => {
      setBooks(res);
    });
  }, [active]);

  return (
    <Box>
      <BookFilter
        active={active}
        clickHandler={(filter) => {
          navigate(`/book#${filter}`);
        }}
      />
      <Box h="3rem" />
      <Center
        flexDirection="column"
        bgColor="secondary"
        mx="3rem"
        textColor="primary"
        py="1rem"
        px="4rem"
        h="16rem"
        gap="1rem"
      >
        <Text fontStyle="italic">{active}</Text>
        <Text textAlign="center">{faker.lorem.paragraph()}</Text>
        <Text textAlign="center">{faker.lorem.paragraph()}</Text>
      </Center>
      <Box h="4rem" />
      <Text
        fontStyle="italic"
        fontWeight="500"
        fontSize="20"
        textColor="shade.500"
      >
        SPOTLIGHT
      </Text>
      <Grid
        mx="3rem"
        gap="1rem"
        gridTemplateColumns={`repeat(${column}, 1fr)`}
        gridTemplateRows={`repeat(${row}, 1fr)`}
      >
        {books.map((book, i) => (
          <BooksGridCard key={i} book={book} span={gridLayout[i]} />
        ))}
      </Grid>
    </Box>
  );
};

export default BookMainSection;
