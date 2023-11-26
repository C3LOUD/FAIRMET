import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Grid,
  GridItem,
  HStack,
  Select,
  Spacer,
  Tag,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Brand, Filter } from "../types";
import { getBrands } from "../util/getBrands";
import { getFilters } from "../util/getFilters";
import DictionaryList from "./DictionaryList";

const tagValidator = (array1: string[], array2: string[]) => {
  return (
    array1.some((el) => array2.includes(el)) ||
    array2.some((el) => array1.includes(el))
  );
};

const ReferenceSearch = () => {
  const [menuItem, setMenuItem] = useState<Filter[]>([]);
  const [filter, setFilter] = useState<string[]>([]);
  const [brands, setBrands] = useState<Brand[]>([]);

  useEffect(() => {
    getFilters().then((res) => setMenuItem(res));
  }, []);

  useEffect(() => {
    getBrands({}).then((res) => setBrands(res));
  }, []);

  return (
    <>
      <HStack>
        <Text fontSize={18}>
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
      <Accordion allowToggle mb="1rem">
        <AccordionItem bgColor="tint.600">
          <AccordionButton p="0">
            <Box
              as="span"
              flex="1"
              textAlign="right"
              fontWeight="700"
              px="1rem"
              textColor="shade.500"
            >
              {"Filter and Order by"}
            </Box>
          </AccordionButton>

          <AccordionPanel pb={4} bgColor="tint.100">
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
      {filter.length !== 0 && (
        <HStack mb="1rem">
          {filter.map((el, i) => (
            <Tag
              bgColor="white"
              rounded="none"
              border="1px"
              key={i}
              textColor="shade.500"
              fontWeight="700"
              fontStyle="italic"
            >
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
      )}
      {brands.length !== 0 && (
        <DictionaryList
          brands={
            filter.length !== 0
              ? brands.filter((brand) => {
                  return Object.keys(brand.tags).some((key) =>
                    tagValidator(
                      brand.tags[key as keyof typeof brand.tags],
                      filter
                    )
                  );
                })
              : brands
          }
        />
      )}
    </>
  );
};

export default ReferenceSearch;
