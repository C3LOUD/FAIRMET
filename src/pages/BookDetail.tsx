import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Heading,
  Image,
  Skeleton,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import { faker } from "@faker-js/faker";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { TBook, TagKey } from "../types";
import { getBook } from "../util/getBook";
import { FaArrowLeft } from "react-icons/fa6";

const bookTags: TagKey[] = [
  "Style, Occasion & Dressing Type",
  "Gender",
  "Country & Region",
  "Field",
  "Function & Activity",
  "Notable Category & Item",
  "Item & Category",
];

const BookDetail = () => {
  const [book, setBook] = useState<TBook>();
  const [previousBook, setPreviousBook] = useState<TBook>();
  const [nextBook, setNextBook] = useState<TBook>();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!id) return;
    getBook({ id }).then((res) => {
      setPreviousBook(res.previous);
      setNextBook(res.next);
      setBook(res.book);
    });
  }, [id]);
  return (
    <Container px="0" maxW="100%" w="100%" mb="8rem">
      <VStack borderBottom="solid 1px" mx="3rem" position="relative">
        <Button
          position="absolute"
          bottom="0"
          left="0"
          transform="auto"
          translateY="150%"
          variant="link"
          onClick={() => {
            navigate("/book");
          }}
        >
          <FaArrowLeft />
        </Button>
        <Heading>{"Post"}</Heading>
        <Text>
          {"Seek your Air, Build your Wardrobe \u0026 Find your Lifestyle"}
        </Text>
      </VStack>
      <Box h="3rem" />
      <Skeleton isLoaded={Boolean(book)} px="3rem">
        {Boolean(book) && (
          <>
            <Text fontWeight={700}>{"このページに関連するタグ"}</Text>
            <Box h="1rem" />
            <Flex gap="0.5rem" flexWrap="wrap">
              {Object.keys(book!.tags)
                .reduce<string[]>(
                  (acc, el) => [...acc, ...book!.tags[el as TagKey]],
                  [] as string[]
                )
                .map((tag: string, i) => (
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
              <Flex direction="column" minH="30rem" flex="2">
                <Text fontWeight={700} textColor="secondary" fontSize={20}>
                  {book?.title}
                </Text>
                <Box h="1rem" />
                <Text fontSize={16}>{book?.content}</Text>
                <Box h="3rem" />
                <Spacer />

                <Flex direction="column">
                  {bookTags.map((tagKey, i) => (
                    <Text
                      key={i}
                      bgColor={i % 2 ? "shade.200" : "tint.500"}
                      textColor="shade.500"
                      fontWeight={700}
                      fontStyle="italic"
                      fontSize={14}
                      px="0.5rem"
                      h="2rem"
                      lineHeight="2rem"
                    >{`${tagKey}: ${book!.tags[tagKey as TagKey].join(
                      ", "
                    )}`}</Text>
                  ))}
                </Flex>
              </Flex>
            </Flex>
            <Box h="4rem" />
            <HStack>
              <Box
                maxW="30%"
                textColor="shade.500"
                fontWeight={700}
                _hover={{
                  borderBottom: "solid 1px",
                }}
              >
                <Link to={`/book/${previousBook?.id}`}>
                  {`previous: ${previousBook?.title}`}
                </Link>
              </Box>
              <Spacer />
              <Box
                maxW="30%"
                textColor="shade.500"
                fontWeight={700}
                _hover={{
                  borderBottom: "solid 1px",
                }}
              >
                <Link to={`/book/${nextBook?.id}`}>
                  {`next: ${nextBook?.title}`}
                </Link>
              </Box>
            </HStack>
          </>
        )}
      </Skeleton>
    </Container>
  );
};

export default BookDetail;
