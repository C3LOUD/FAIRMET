import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  HStack,
  Image,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FaChevronDown } from "react-icons/fa6";
import { SiInstagram, SiPixiv } from "react-icons/si";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <Flex as="nav" direction="column" position="sticky" top="0" left="0">
      <Link to="/">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Hololive_Production_logo.svg/512px-Hololive_Production_logo.svg.png"
          alt="logo"
        />
      </Link>
      <Accordion defaultIndex={[0]} allowMultiple>
        <AccordionItem border="none">
          <AccordionButton p="0">
            <Box as="span" flex="1" textAlign="left">
              HOME
            </Box>
            <FaChevronDown />
          </AccordionButton>

          <AccordionPanel pb={4}>
            <VStack>
              <Box textAlign="left" w="100%">
                <Link to="/#hero">{"Highlight \uFF06 Updated"}</Link>
              </Box>
              <Box textAlign="left" w="100%">
                <Link to="/#reference-search">{"Reference Search"}</Link>
              </Box>
              <Box textAlign="left" w="100%">
                <Link to="/#book">{"Book"}</Link>
              </Box>
            </VStack>
          </AccordionPanel>
        </AccordionItem>

        <Link to="/dictionary">{"DICTIONARY\uFF08Reference Search\uFF09"}</Link>

        <AccordionItem border="none">
          <AccordionButton p="0">
            <Box as="span" flex="1" textAlign="left">
              {"BOOK \u3010ALL\u3011"}
            </Box>
            <FaChevronDown />
          </AccordionButton>
          <AccordionPanel pb={4}>
            <Box textAlign="left" w="100%">
              <Link to="/book">{"Buy \uFF06 Pick \u3010ITEM\u3011"}</Link>
            </Box>
            <Box textAlign="left" w="100%">
              <Link to="/book">{"Dress \uFF06 Wear \u3010OUTFIT\u3011"}</Link>
            </Box>
            <Box textAlign="left" w="100%">
              <Link to="/book">
                {"Style \uFF06 Air \u3010GROOMING \uFF06 BEAUTY \u3011"}
              </Link>
            </Box>
            <Box textAlign="left" w="100%">
              <Link to="/book">
                {"Other \u3010FASHION \uFF06 LIFESTYLE\u3011"}
              </Link>
            </Box>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>

      <Spacer />

      <HStack>
        <SiPixiv />
        <SiInstagram />

        <Spacer />
        <Text>English</Text>
      </HStack>
    </Flex>
  );
};

export default SideBar;
