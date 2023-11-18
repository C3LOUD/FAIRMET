import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Flex,
  HStack,
  Image,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { SiInstagram, SiPixiv } from "react-icons/si";
import { Link } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa6";

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
            <Button variant="link">{"Highlight \uFF06 Updated"}</Button>
            <Button variant="link">Reference Search</Button>
            <Button variant="link">Book</Button>
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
            <Button variant="link">{"Buy \uFF06 Pick \u3010ITEM\u3011"}</Button>
            <Button variant="link">
              {"Dress \uFF06 Wear \u3010OUTFIT\u3011"}
            </Button>
            <Button variant="link">
              {"Style \uFF06 Air \u3010GROOMING \uFF06 BEAUTY \u3011"}
            </Button>
            <Button variant="link">
              {"Other \u3010FASHION \uFF06 LIFESTYLE\u3011"}
            </Button>
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
