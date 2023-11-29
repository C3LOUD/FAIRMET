import {
  Box,
  Button,
  Flex,
  HStack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useRef } from "react";
import { Filter } from "../types";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

type Props = {
  items: Filter[];
  filter: string[];
  setFilter: React.Dispatch<React.SetStateAction<string[]>>;
};

const ReferenceSearchTabFilter = ({ items, filter, setFilter }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const childRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log(childRef.current?.offsetWidth);
    console.log(containerRef.current?.offsetWidth);
  }, [childRef.current?.offsetWidth, containerRef.current?.offsetWidth]);

  return (
    <Tabs>
      <Box overflow="hidden" bgColor="tint.500" ref={containerRef} w="100%">
        <Box position="relative" w="100%">
          <HStack
            h="999rem"
            bgColor="tint.500"
            transform="auto"
            translateY="-50%"
            position="absolute"
            top="50%"
            left="0"
            gap="0"
          >
            <Text
              px="1rem"
              borderRight="solid 2px"
              fontWeight={700}
              whiteSpace="nowrap"
            >
              {"Specific Items"}
            </Text>
            <Button variant="unstyle" bgColor="" p="0" m="0">
              <FaChevronLeft />
            </Button>
          </HStack>
          <Button
            rounded="0"
            py="99rem"
            variant="unstyle"
            bgColor="tint.500"
            p="0"
            position="absolute"
            right="0"
            top="0"
          >
            <FaChevronRight />
          </Button>
          <TabList
            overflowX="auto"
            overflowY="hidden"
            css={{
              "&::-webkit-scrollbar": {
                display: "none",
              },
            }}
          >
            <Flex ref={childRef} pl="9rem">
              {items.map((item, i) => (
                <Tab
                  key={i}
                  textColor="shade.500"
                  fontWeight={700}
                  whiteSpace="nowrap"
                  _selected={{
                    textColor: "secondary",
                  }}
                >
                  {item.type}
                </Tab>
              ))}
            </Flex>
          </TabList>
        </Box>
      </Box>

      <TabPanels bgColor="tint.500">
        {items.map((item, i) => (
          <TabPanel key={i} display="flex" gap="1rem" flexWrap="wrap">
            {item.options.map((option, i) => {
              const isActive = filter.includes(option);
              return (
                <Button
                  key={i}
                  boxShadow={
                    isActive
                      ? "1px 1px 0 2px var(--chakra-colors-shade-500) inset"
                      : "1px 1px 0 1px var(--chakra-colors-shade-500)"
                  }
                  bgColor={isActive ? "shade.200" : "primary"}
                  _hover={{
                    background: isActive ? "shade.300" : "shade.100",
                  }}
                  _active={{
                    boxShadow:
                      "1px 1px 1px 1px var(--chakra-colors-shade-500) inset",
                    background: isActive ? "shade.400" : "shade.200",
                  }}
                  rounded="none"
                  p="0"
                  w="fit-content"
                  h="fit-content"
                  wordBreak="break-word"
                  border="1px"
                  whiteSpace="break-spaces"
                  fontSize="sm"
                  onClick={(e: React.MouseEvent) => {
                    e.preventDefault();
                    const newFilter = isActive
                      ? filter.filter((el) => el !== option)
                      : [...filter, option];
                    setFilter(newFilter);
                  }}
                >
                  {option}
                </Button>
              );
            })}
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );
};

export default ReferenceSearchTabFilter;
