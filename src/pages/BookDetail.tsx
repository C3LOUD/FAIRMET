import {
  Box,
  Container,
  Flex,
  Heading,
  Image,
  Skeleton,
  Text,
  VStack,
} from "@chakra-ui/react";
import { faker } from "@faker-js/faker";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { TBook } from "../types";
import { getBook } from "../util/getBook";

type Props = {};

const BookDetail = (props: Props) => {
  const [book, setBook] = useState<TBook>();
  const { id } = useParams();

  useEffect(() => {
    if (!id) return;
    getBook({ id }).then((res) => setBook(res));
  }, [id]);
  return (
    <Container px="0" maxW="100%" w="100%" mb="8rem">
      <VStack borderBottom="solid 1px" mx="3rem">
        <Heading>{"Post"}</Heading>
        <Text>
          {"Seek your Air, Build your Wardrobe \u0026 Find your Lifestyle"}
        </Text>
      </VStack>
      <Box h="3rem" />
      <Skeleton isLoaded={Boolean(book)} px="3rem">
        <Text fontWeight={700}>{"このページに関連するタグ"}</Text>
        <Box h="1rem" />
        <Flex gap="0.5rem" flexWrap="wrap">
          {book?.tags.map((tag, i) => (
            <Box
              fontStyle="italic"
              fontWeight={700}
              textColor="shade.500"
              border="solid 1px"
              px="0.5rem"
              fontSize={14}
              key={i}
            >
              {tag}
            </Box>
          ))}
        </Flex>
        <Box h="3rem" />
        <Flex h="max-content">
          <Flex flex="1" direction="column">
            <Image
              flex="2"
              flexShrink={2}
              src={faker.image.url()}
              maxW="100%"
              maxH="100%"
            />
            <Image
              flex="1"
              flexShrink={1}
              src={faker.image.url()}
              maxW="100%"
            />
            <Flex flex="1" flexShrink={1}>
              <Image
                src={faker.image.url()}
                objectFit="cover"
                flexShrink={1}
                flexBasis={0}
              />
              <Image
                src={faker.image.url()}
                objectFit="cover"
                flexShrink={1}
                flexBasis={0}
              />
            </Flex>
          </Flex>
          <Box flex="2">
            <Text>{book?.title}</Text>
          </Box>
        </Flex>
      </Skeleton>
    </Container>
  );
};

export default BookDetail;
