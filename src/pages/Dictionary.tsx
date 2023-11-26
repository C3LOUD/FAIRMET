import { Box, Container, Heading } from "@chakra-ui/react";
import BookCarousel from "../components/BookCarousel";
import ReferenceSearch, { PaginationType } from "../components/ReferenceSearch";
import { BookCardLayout } from "../components/BookCard";

const Dictionary = () => {
  return (
    <Container px="0" maxW="100%" w="100%">
      <Box as="section" id="reference-search" mb="8rem">
        <Heading mb="2rem">
          {"Reference Search \u3010Collection コレクション\u3011"}
        </Heading>
        <ReferenceSearch type={PaginationType.normal} initLimit={3} />
      </Box>
      <Heading mb="2rem" fontSize={24}>
        {"Recommend/Related Post"}
      </Heading>
      <BookCarousel type={BookCardLayout.FixWidth} />
      <Box h="5rem" />
    </Container>
  );
};

export default Dictionary;
