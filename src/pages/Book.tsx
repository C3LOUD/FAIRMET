import { Box, Container, Heading } from "@chakra-ui/react";
import React from "react";
import BookMainSection from "../components/BookMainSection";
import BookCarousel from "../components/BookCarousel";
import { BookCardLayout } from "../components/BookCard";
import BrandCarousel from "../components/BrandCarousel";
import BookFooterSection from "../components/BookFooterSection";
import BookBodySection from "../components/BookBodySection";

const Book = () => {
  return (
    <Container px="0" maxW="100%" w="100%" mb="8rem">
      <Box as="section" id="book">
        <Heading mb="1rem">{"Book"}</Heading>
        <BookMainSection />
      </Box>
      <Box h="5rem" />
      <BookCarousel type={BookCardLayout.LandscapeLeft} />
      <Box h="5rem" />
      <BookBodySection />
      <Box h="5rem" />
      <Box border="solid 1px" py="2rem">
        <Heading px="2rem">{"Brand コレクション"}</Heading>
        <Box h="2rem" />
        <BrandCarousel />
      </Box>
      <Box h="3rem" />
      <BookFooterSection />
    </Container>
  );
};

export default Book;
