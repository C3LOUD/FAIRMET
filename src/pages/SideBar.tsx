import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  AccordionIcon,
  Box,
  Flex,
  HStack,
  Image,
  Spacer,
  Text,
  VStack,
  IconButton,
} from "@chakra-ui/react";
import { FaPinterest, FaInstagram } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import SideBarItem from "../components/SideBarItem";

const SideBar = () => {
  const navigate = useNavigate();
  return (
    <Flex
      as="nav"
      direction="column"
      position="sticky"
      top="0"
      left="0"
      gap="1rem"
      minH="100vh"
    >
      <Link to="/" reloadDocument>
        <Image
          src="/image/logo_italic.svg"
          alt="logo"
          h="5rem"
          py="1rem"
          px={2}
        />
      </Link>
      <Accordion defaultIndex={[0]}>
        <AccordionItem border="none" mb="1rem">
          <AccordionButton
            px={2}
            _hover={{ bgColor: "tint.500" }}
            _expanded={{ fontWeight: "bold" }}
          >
            <Box as="span" flex="1" textAlign="left" fontSize="1.5rem">
              HOME
            </Box>
            <AccordionIcon />
          </AccordionButton>

          <AccordionPanel pb={4}>
            <VStack alignItems="start">
              <SideBarItem direct="/#hero" text={"Highlight \uFF06 Updated"} />
              <SideBarItem
                direct="/#reference-search"
                text={"Reference Search"}
              />
              <SideBarItem direct="/#book" text={"Book"} />
            </VStack>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem border="none" mb="1rem">
          <AccordionButton
            px={2}
            _hover={{ bgColor: "tint.500" }}
            _expanded={{ fontWeight: "bold" }}
            onClick={() => navigate("/dictionary", { replace: true })}
          >
            <Box textAlign="left" w="100%" fontSize="1.5rem">
              {"DICTIONARY\uFF08Reference Search\uFF09"}
            </Box>
          </AccordionButton>
        </AccordionItem>

        <AccordionItem border="none" mb="1rem">
          <AccordionButton
            px={2}
            _hover={{ bgColor: "tint.500" }}
            _expanded={{ fontWeight: "bold" }}
          >
            <Box as="span" flex="1" textAlign="left" fontSize="1.5rem">
              {"BOOK"}
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>
            <VStack alignItems="start">
              <SideBarItem
                direct="/book/#ALL"
                text={"All \u3010CATEGORY\u3011"}
              />
              <SideBarItem
                direct="/book/#ITEM"
                text={"Buy \uFF06 Pick \u3010ITEM\u3011"}
              />
              <SideBarItem
                direct="/book/#OUTFIT"
                text={"Dress \uFF06 Wear \u3010OUTFIT\u3011"}
              />
              <SideBarItem
                direct="/book/#STYLE"
                text={"Style \uFF06 Air \u3010GROOMING \uFF06 BEAUTY \u3011"}
              />
              <SideBarItem
                direct="/book/#OTHER"
                text={"Other \u3010FASHION \uFF06 LIFESTYLE\u3011"}
              />
            </VStack>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>

      <Spacer />

      <HStack p={4}>
        <IconButton
          isRound
          bgColor="transparent"
          aria-label="Direct to Pinterest"
          fontSize="1.5rem"
          icon={<FaPinterest />}
        />
        <IconButton
          isRound
          bgColor="transparent"
          aria-label="Direct to Instagram"
          fontSize="1.5rem"
          icon={<FaInstagram />}
        />
        <Spacer />
        <Text>English</Text>
      </HStack>
    </Flex>
  );
};

export default SideBar;
