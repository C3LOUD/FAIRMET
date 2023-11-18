import { Container } from "@chakra-ui/react";
import React from "react";
import Hero from "../components/Hero";
import ReferenceSearch from "../components/ReferenceSearch";
import Book from "../components/Book";
import BookList from "../components/BookList";
import Brand from "../components/Brand";

const Landing = () => {
  return (
    <Container px="0" maxW="100%">
      <Hero />
      <ReferenceSearch />
      <Book />
      <BookList />
      <Brand />
      <BookList />
    </Container>
  );
};

export default Landing;
