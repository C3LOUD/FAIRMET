import { Box, GridItem, Heading, Image, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { getBooks } from "../util/getBooks";
import Carousel from "./Carousel";
import { TBook } from "../types";

const cardLength = 10;

const Book = () => {
  const [bookCardList, setBookCardList] = useState<TBook[]>([]);
  const [imageLoading, setImageLoading] = useState<boolean[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    getBooks({ limit: cardLength }).then((res) => {
      setBookCardList(res);
    });
  }, []);

  useEffect(() => {
    const allImageIsLoaded = imageLoading.every((status) => !status);
    setIsLoading(!allImageIsLoaded);
  }, [imageLoading]);

  return (
    <Box as="section" id="book">
      <Heading borderBottom="2px" mb="2rem">
        {"Book 記事一覧 \uFF08TOP: Colume, Book, News\uFF09"}
      </Heading>
      <Text
        fontStyle="italic"
        fontWeight="500"
        fontSize="20"
        textColor="shade.500"
      >
        HIGHLIGHTS
      </Text>
      <Carousel isReady={!isLoading}>
        {bookCardList.map((bookCard, i) => (
          <GridItem
            key={bookCard?.id}
            position="relative"
            h="100%"
            minW="max-content"
          >
            <Image
              src={bookCard?.image}
              alt={bookCard?.title}
              h="36rem"
              objectFit="cover"
              onLoadStart={() => {
                setImageLoading((prev) => {
                  const newArr = [...prev];
                  newArr[i] = true;
                  return newArr;
                });
              }}
              onLoad={() => {
                setImageLoading((prev) => {
                  const newArr = [...prev];
                  newArr[i] = false;
                  return newArr;
                });
              }}
            />
            <Text
              bg="white"
              position="absolute"
              bottom="5"
              left="50%"
              transform="auto"
              translateX="-50%"
              w="100%"
              maxW="80%"
            >
              {bookCard?.title}
            </Text>
          </GridItem>
        ))}
      </Carousel>
    </Box>
  );
};

export default Book;
