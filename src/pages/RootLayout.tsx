import { Box, Container, Flex, HStack, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import { RiCopyrightLine } from "react-icons/ri";

const RootLayout = () => {
  return (
    <Container as="main" maxW="90rem" px="0">
      <Flex>
        <Box w="13.75rem">
          <SideBar />
        </Box>
        <Flex flexDirection="column" px="0" w="100%">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Hololive_Production_logo.svg/512px-Hololive_Production_logo.svg.png"
            alt="logo"
            objectFit="contain"
            h="5rem"
          />
          <Outlet />
          <HStack alignSelf="center" w="fit-content">
            <Text>{"Copyright"}</Text>
            <RiCopyrightLine />
            <Text>{"2023 Owner. \u00A0All rights reserved"}</Text>
          </HStack>
        </Flex>
      </Flex>
    </Container>
  );
};

export default RootLayout;
