import { Button, Flex, Text, VStack, useDisclosure } from "@chakra-ui/react";
import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";
import { Brand } from "../types";
import DictionaryCard from "./DictionaryCard";
import DictionaryModal from "./DictionaryModal";
import FindMoreBtn from "./FindMoreBtn";

const rows = 3;

type Props = {
  brands: Brand[];
};

const DictionaryList = ({ brands }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [activeBrand, setActiveBrand] = useState<Brand>();
  const [limit, setLimit] = useState<number>(4);
  const clickHandler = (e: React.MouseEvent) => {
    e.preventDefault();
    const brand = brands.find((brand) => brand.id === e.currentTarget.id);
    setActiveBrand(brand);
    onOpen();
  };

  return (
    <Flex
      w="100%"
      position="relative"
      gap="3rem"
      px="3rem"
      wrap="wrap"
      pb="3rem"
    >
      {activeBrand && (
        <DictionaryModal
          isOpen={isOpen}
          onClose={onClose}
          brand={activeBrand}
        />
      )}
      {[...new Array(rows)].map((_, index) => (
        <VStack flex="1" key={index}>
          {brands.map((brand, i: number) => {
            // eslint-disable-next-line array-callback-return
            if (i % rows !== index || i > limit * rows - 1) return;
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
      {limit * rows < brands.length ? (
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
            <Text>{"Seek More"}</Text>
            <FaChevronDown />
          </VStack>
        </Button>
      ) : (
        <FindMoreBtn to="/dictionary" />
      )}
    </Flex>
  );
};

export default DictionaryList;
