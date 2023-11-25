import { Box, Container, Heading, Text } from "@chakra-ui/react";
import BookList from "../components/BookList";
import BrandCarousel from "../components/BrandCarousel";
import HeroCarousel from "../components/HeroCarousel";
import ReferenceSearch from "../components/ReferenceSearch";
import BookCarousel from "../components/BookCarousel";

const Landing = () => {
  return (
    <Container px="0" maxW="100%">
      <Box as="section" id="hero" w="100%">
        <HeroCarousel />
      </Box>
      <ReferenceSearch />
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
        <BookCarousel />
        <BookList showTab showTitle />
        <Heading borderBottom="2px">{"Brand コレクション"}</Heading>
        <BrandCarousel />
        <BookList />
      </Box>
    </Container>
  );
};

export default Landing;
