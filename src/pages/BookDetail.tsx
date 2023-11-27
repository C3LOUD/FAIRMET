import {
  Box,
  Container,
  Flex,
  Heading,
  Image,
  Skeleton,
  Spacer,
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
        <Flex h="fit-content" gap="2rem">
          <Flex flex="1" direction="column" gap="1rem" minH="30rem">
            <Box flex="2 1 15rem" minH="0" minW="0">
              <Image
                src={faker.image.url()}
                objectFit="cover"
                w="100%"
                h="100%"
                objectPosition="center"
              />
            </Box>
            <Box flex="1 1 7.5rem" minH="0" minW="0">
              <Image
                src={faker.image.url()}
                w="100%"
                h="100%"
                objectFit="cover"
                objectPosition="center"
              />
            </Box>
            <Flex flex="1 1 7.5rem" minH="0" minW="0">
              <Box flexBasis="50%">
                <Image
                  w="100%"
                  h="100%"
                  src={faker.image.url()}
                  objectFit="cover"
                  objectPosition="center"
                />
              </Box>
              <Box flexBasis="50%">
                <Image
                  w="100%"
                  h="100%"
                  src={faker.image.url()}
                  objectFit="cover"
                  objectPosition="center"
                />
              </Box>
            </Flex>
          </Flex>
          <Box flex="2">
            <Text fontWeight={700} textColor="secondary" fontSize={20}>
              {book?.title}
            </Text>
            <Box h="1rem" />
            <Text fontSize={16}>{book?.content}</Text>
            <Box h="3rem" />

            <Flex bgColor="red">
              <Text h="20rem">Footer</Text>
            </Flex>
          </Box>
        </Flex>
      </Skeleton>
    </Container>
  );
};

export default BookDetail;
