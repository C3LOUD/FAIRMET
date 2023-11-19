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

const rows = 3;

const ReferenceSearch = () => {
  const [menuItem, setMenuItem] = useState<any>([]);
  const [filter, setFilter] = useState<{ menu: string; option: string }[]>([]);
  const [products, setProducts] = useState<any>([]);
  const [limit, setLimit] = useState<number>(4);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [activeProduct, setActiveProduct] = useState<any>();

  const clickHandler = (e: React.MouseEvent) => {
    e.preventDefault();
    const product = products.find(
      (product: { ProductId: string }) =>
        product.ProductId === e.currentTarget.id
    );
    setActiveProduct(product);
    onOpen();
  };

  useEffect(() => {
    fetch("/data/category.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }).then((res) =>
      res
        .json()
        .then((json) =>
          setMenuItem(json.menuItemList[0].ChildMenus[7].ChildMenus)
        )
    );
  }, []);

  useEffect(() => {
    fetch(`/data/${filter[0]?.option || "promo_basics"}.json`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }).then((res) => {
      if (!res.ok) return;
      res.json().then((json) => setProducts(json.CatalogProducts));
    });
  }, [filter]);

  return (
    <Box as="section" maxW="71.25rem">
      {activeProduct && (
        <DictionaryModal
          isOpen={isOpen}
          onClose={onClose}
          product={activeProduct}
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
                menuItem.map((menu: any) => {
                  return (
                    <GridItem key={menu.Category} textAlign="center">
                      <Box>
                        <Text>{menu.Name}</Text>
                        <Grid templateColumns="repeat(2, 1fr)" gap="0.5rem">
                          {menu.ChildMenus.map((child: any) => (
                            <GridItem key={child.Category}>
                              <Button
                                bgColor={
                                  filter.some(
                                    (el) =>
                                      el.option === child.Category &&
                                      el.menu === menu.Category
                                  )
                                    ? "gray.500"
                                    : "white"
                                }
                                _hover={{
                                  background: filter.some(
                                    (el) =>
                                      el.option === child.Category &&
                                      el.menu === menu.Category
                                  )
                                    ? "gray.600"
                                    : "gray.300",
                                }}
                                rounded="none"
                                p="0"
                                w="5rem"
                                h="fit-content"
                                wordBreak="break-word"
                                border="1px"
                                whiteSpace="break-spaces"
                                fontSize="sm"
                                key={child.Category}
                                onClick={(e: React.MouseEvent) => {
                                  e.preventDefault();
                                  const newFilter = filter.some(
                                    (el) =>
                                      el.option === child.Category &&
                                      el.menu === menu.Category
                                  )
                                    ? filter.filter(
                                        (el) =>
                                          el.option !== child.Category ||
                                          el.menu !== menu.Category
                                      )
                                    : [
                                        ...filter,
                                        {
                                          option: child.Category,
                                          menu: menu.Category,
                                        },
                                      ];

                                  setFilter(newFilter);
                                }}
                              >
                                {child.Name}
                              </Button>
                            </GridItem>
                          ))}
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
            <Tag bgColor="white" rounded="none" border="1px" key={el.menu}>
              {el.option}
            </Tag>
          ))}
          <Button
            p="0"
            h="fit-content"
            variant="link"
            fontStyle="italic"
            _hover={{
              border: "none",
              textColor: "gray.300",
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
      {products.length ? (
        <Flex w="100%" position="relative" gap="5rem">
          {[...new Array(rows)].map((_, index) => (
            <VStack flex="1" key={index}>
              {products.map((product: any, i: number) => {
                if (i % rows !== index || i > limit * rows - 1) return <></>;
                return (
                  <DictionaryCard
                    key={product.ProductId}
                    product={product}
                    onClick={clickHandler}
                  />
                );
              })}
            </VStack>
          ))}
          {limit * rows < products.length && (
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
