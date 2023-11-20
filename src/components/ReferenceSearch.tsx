import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  HStack,
  Heading,
  Select,
  Spacer,
  Tag,
  Text,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { FaChevronDown } from "react-icons/fa6";
import DictionaryCard from "./DictionaryCard";
import DictionaryModal from "./DictionaryModal";
import { Brand, Filter } from "../types";

const rows = 3;

const ReferenceSearch = () => {
  const [menuItem, setMenuItem] = useState<Filter[]>([]);
  const [filter, setFilter] = useState<string[]>([]);
  const [brands, setBrands] = useState<Brand[]>([]);
  const [limit, setLimit] = useState<number>(4);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [activeBrand, setActiveBrand] = useState<Brand>();

  const clickHandler = (e: React.MouseEvent) => {
    e.preventDefault();
    const brand = brands.find((brand) => brand.id === e.currentTarget.id);
    setActiveBrand(brand);
    onOpen();
  };

  useEffect(() => {
    fetch("/data/filter.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }).then((res) => res.json().then((json) => setMenuItem(json.filter)));
  }, []);

  useEffect(() => {
    fetch(`/data/brand.json`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }).then((res) => {
      if (!res.ok) return;
      res.json().then((json) => setBrands(json.brand));
    });
  }, []);

  return (
    <Box as="section" maxW="71.25rem" id="reference-search" mb="4rem">
      {activeBrand && (
        <DictionaryModal
          isOpen={isOpen}
          onClose={onClose}
          brand={activeBrand}
        />
      )}
      <Heading>
        {"Reference Search \u3010Collection コレクション\u3011"}
      </Heading>
      <HStack>
        <Text>
          {"Seek your air, build your wardrobe \uFF06 find your lifestyle"}
        </Text>
        <Spacer />
        <Text>{"Sort by\uFF1A"}</Text>
        <Select
          w="fit-content"
          h="fit-content"
          border="none"
          _focus={{ ring: "none" }}
        >
          <option value="RANDOM">{"RANDOM"}</option>
          <option value="DATE">{"DATE"}</option>
          <option value="CHAR">{"A-Z \uFF08CAPITAL\uFF09"}</option>
          <option value="RANDOM">{"RANDOM"}</option>
        </Select>
      </HStack>
      <Accordion allowToggle>
        <AccordionItem>
          <AccordionButton p="0">
            <Box as="span" flex="1" textAlign="right">
              {"Filter and Order by"}
            </Box>
            <FaChevronDown />
          </AccordionButton>

          <AccordionPanel pb={4} bgColor="gray.200">
            <Grid templateColumns="repeat(4, 1fr)">
              {menuItem.length &&
                menuItem.map((menu) => {
                  return (
                    <GridItem key={menu.id} textAlign="center">
                      <Box>
                        <Text>{menu.type}</Text>
                        <Grid templateColumns="repeat(2, 1fr)" gap="0.5rem">
                          {menu.options.map((option: string, i: number) => {
                            const isActive = filter.includes(option);
                            return (
                              <GridItem key={i}>
                                <Button
                                  boxShadow={
                                    isActive
                                      ? "1px 1px 0 2px var(--chakra-colors-shade-500) inset"
                                      : "1px 1px 0 1px var(--chakra-colors-shade-500)"
                                  }
                                  bgColor={isActive ? "shade.200" : "primary"}
                                  _hover={{
                                    background: isActive
                                      ? "shade.300"
                                      : "shade.100",
                                  }}
                                  _active={{
                                    boxShadow:
                                      "1px 1px 1px 1px var(--chakra-colors-shade-500) inset",
                                    background: isActive
                                      ? "shade.400"
                                      : "shade.200",
                                  }}
                                  rounded="none"
                                  p="0"
                                  w="5rem"
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
                              </GridItem>
                            );
                          })}
                        </Grid>
                      </Box>
                    </GridItem>
                  );
                })}
            </Grid>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
      {filter.length ? (
        <HStack>
          {filter.map((el) => (
            <Tag bgColor="white" rounded="none" border="1px" key={el}>
              {el}
            </Tag>
          ))}
          <Button
            p="0"
            h="fit-content"
            variant="link"
            fontStyle="italic"
            _hover={{
              border: "none",
              textColor: "shade",
            }}
            onClick={(e: React.MouseEvent) => {
              e.preventDefault();
              setFilter([]);
            }}
          >
            {"Clear All"}
          </Button>
        </HStack>
      ) : (
        <></>
      )}
      {brands.length ? (
        <Flex w="100%" position="relative" gap="5rem">
          {[...new Array(rows)].map((_, index) => (
            <VStack flex="1" key={index}>
              {brands.map((brand, i: number) => {
                if (i % rows !== index || i > limit * rows - 1) return <></>;
                return (
                  <DictionaryCard
                    key={brand.id}
                    brand={brand}
                    onClick={clickHandler}
                  />
                );
              })}
            </VStack>
          ))}
          {limit * rows < brands.length && (
            <Button
              variant="link"
              position="absolute"
              bottom="0"
              translateY="100%"
              left="50%"
              translateX="-50%"
              transform="auto"
              _hover={{ border: "none", textColor: "gray.600" }}
              onClick={(e: React.MouseEvent) => {
                e.preventDefault();
                setLimit((prev) => prev + 4);
              }}
            >
              <VStack gap="0">
                <Text>{"Seek your air"}</Text>
                <FaChevronDown />
              </VStack>
            </Button>
          )}
        </Flex>
      ) : (
        <></>
      )}
    </Box>
  );
};

export default ReferenceSearch;
