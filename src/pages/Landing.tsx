import { Box, Container, Divider, Text } from "@chakra-ui/react";
import { BookCardLayout } from "../components/BookCard";
import BookCarousel from "../components/BookCarousel";
import BookHeader from "../components/BookHeader";
import BookSection from "../components/BookSection";
import BrandCarousel from "../components/BrandCarousel";
import BrandHeader from "../components/BrandHeader";
import DictionaryHeader from "../components/DictionaryHeader";
import HeroCarousel from "../components/HeroCarousel";
import ReferenceSearch, { PaginationType } from "../components/ReferenceSearch";
import ScrollToHashElement from "../components/ScrollToHashElement";

const Landing = () => {
  return (
    <Container px="0" maxW="100%">
      <ScrollToHashElement />
      <Box as="section" id="hero" w="100%" mb="5rem">
        <HeroCarousel />
      </Box>
      <Box as="section" id="reference-search">
        <DictionaryHeader />
        <Box h="2rem" />
        <ReferenceSearch type={PaginationType.infinite} initLimit={4} />
      </Box>
      <Box h="5rem" />
      <Divider borderColor="secondary" />
      <Box h="5rem" />
      <Box as="section" id="book" mb="5rem">
        <BookHeader />
        <Box h="3rem" />
        <Box bgColor="tint.500" position="relative">
          <Text
            position="absolute"
            right="0"
            top="0"
            transform="auto"
            translateY="-100%"
            fontStyle="italic"
            fontWeight={700}
            fontSize={18}
            textColor="secondary"
            fontFamily="Gill Sans MT"
          >
            {"Highlight / Spotlight"}
          </Text>
          <BookCarousel type={BookCardLayout.LandscapeLeft} />
        </Box>
        <Box h="5rem" />
        <BookSection />
        <Box h="7rem" />
        <BrandHeader />
        <Box h="1rem" />
        <BrandCarousel />
        <Box h="3rem" />
      </Box>
    </Container>
  );
};

export default Landing;
