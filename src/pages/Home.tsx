import { Container, Heading, Text } from "@chakra-ui/react";
import React from "react";

type Props = {};

const Home = (props: Props) => {
  return (
    <Container>
      <Heading>Hello World</Heading>
      <Heading>你好世界</Heading>
      <Heading>世界へようこそ</Heading>
      <Text>Hello World</Text>
      <Text>你好世界</Text>
      <Text>世界へようこそ</Text>
    </Container>
  );
};

export default Home;
