import { Box, Card, Flex, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { TBook } from "../types";

export enum BookCardLayout {
  LandscapeLeft,
  LandscapeRight,
  Portrait,
}

type Props = {
  book: TBook;
  type: BookCardLayout;
};

const height = 24;
const width = 36;
const padding = 1;

const BookCard: React.FC<Props> = ({ book, type }) => {
  switch (type) {
    case BookCardLayout.LandscapeLeft:
      return (
        <Card
          p={`${padding}rem`}
          border="none"
          boxShadow="none"
          rounded="none"
          borderBottom="solid 1px black"
          bgColor="transparent"
          _last={{ border: "none" }}
          h={`${height}rem`}
          w={`${width}rem`}
        >
          <Flex gap="2rem">
            <Box flex="1" w="100%" h={`calc(${height}rem - 2 * ${padding}rem)`}>
              <Image
                src={book.image}
                alt={book.title}
                objectFit="cover"
                objectPosition="center"
                h="100%"
                w="100%"
              />
            </Box>
            <Flex
              direction="column"
              gap="3rem"
              flex="1"
              py="1rem"
              overflow="hidden"
            >
              <Text>{`\u3010${book.category}\u3011`}</Text>
              <Text
                w="100%"
                overflow="hidden"
                css={{
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: 3,
                }}
              >
                {book.title}
              </Text>

              <Text
                w="100%"
                overflow="hidden"
                css={{
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: 3,
                }}
              >
                {book.content}
              </Text>
            </Flex>
          </Flex>
        </Card>
      );
    case BookCardLayout.LandscapeRight:
      return (
        <Card
          p={`${padding}rem`}
          border="none"
          boxShadow="none"
          rounded="none"
          borderBottom="solid 1px black"
          bgColor="transparent"
          _last={{ border: "none" }}
          h={`${height}rem`}
          w={`${width}rem`}
        >
          <Flex gap="2rem">
            <Flex
              direction="column"
              gap="3rem"
              flex="1"
              py="1rem"
              overflow="hidden"
            >
              <Text>{`\u3010${book.category}\u3011`}</Text>
              <Text
                w="100%"
                overflow="hidden"
                css={{
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: 3,
                }}
              >
                {book.title}
              </Text>

              <Text
                w="100%"
                overflow="hidden"
                css={{
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: 3,
                }}
              >
                {book.content}
              </Text>
            </Flex>
            <Box flex="1" w="100%" h={`calc(${height}rem - 2 * ${padding}rem)`}>
              <Image
                src={book.image}
                alt={book.title}
                objectFit="cover"
                objectPosition="center"
                h="100%"
                w="100%"
              />
            </Box>
          </Flex>
        </Card>
      );
    case BookCardLayout.Portrait:
      return (
        <Card
          p={`${padding}rem`}
          w={`${width}rem`}
          border="none"
          boxShadow="none"
          rounded="none"
          borderBottom="solid 1px black"
          _last={{ border: "none" }}
          h="fit-content"
          bgColor="transparent"
        >
          <VStack gap="1rem" direction="column">
            <Box h="12rem" w="80%">
              <Image
                src={book.image}
                alt={book.title}
                objectFit="cover"
                objectPosition="center"
                h="100%"
                w="100%"
              />
            </Box>
            <Flex
              direction="column"
              gap="1rem"
              flex="1"
              py="1rem"
              overflow="hidden"
            >
              <Text>{`\u3010${book.category}\u3011`}</Text>
              <Text
                w="100%"
                overflow="hidden"
                css={{
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: 3,
                }}
              >
                {book.title}
              </Text>

              <Text
                w="100%"
                overflow="hidden"
                css={{
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: 3,
                }}
              >
                {book.content}
              </Text>
            </Flex>
          </VStack>
        </Card>
      );
    default:
      return <></>;
  }
};

export default BookCard;
