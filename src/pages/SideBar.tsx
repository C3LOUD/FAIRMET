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

type Props = {};

const SideBar = (props: Props) => {
  return (
    <Flex as="nav" direction="column" position="sticky" top="0" left="0">
      <Box h="5rem">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Hololive_Production_logo.svg/512px-Hololive_Production_logo.svg.png"
          alt="logo"
        />
      </Box>
      <Accordion defaultIndex={[0]} allowMultiple>
        <AccordionItem>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left">
              HOME
            </Box>
          </AccordionButton>

          <AccordionPanel pb={4}>
            <Button variant="link">{"Highlight \uFF06 Updated"}</Button>
            <Button variant="link">Reference Search</Button>
            <Button variant="link">Book</Button>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left">
              {"DICTIONARY \uFF08Reference Search\uFF09"}
            </Box>
          </AccordionButton>
        </AccordionItem>

        <AccordionItem>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left">
              {"BOOK \u3010ALL\u3011"}
            </Box>
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
