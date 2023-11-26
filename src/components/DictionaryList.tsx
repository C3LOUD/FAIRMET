import { Flex, VStack, useDisclosure } from "@chakra-ui/react";
import React, { useState } from "react";
import { Brand } from "../types";
import DictionaryCard from "./DictionaryCard";
import DictionaryModal from "./DictionaryModal";

type Props = {
  brands: Brand[];
  limit: number;
  rows: number;
};

const DictionaryList = ({ brands, limit, rows }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [activeBrand, setActiveBrand] = useState<Brand>();

  const clickHandler = (e: React.MouseEvent) => {
    e.preventDefault();
    const brand = brands.find((brand) => brand.id === e.currentTarget.id);
    setActiveBrand(brand);
    onOpen();
  };

  return (
    <Flex w="100%" gap="3rem" px="3rem" wrap="wrap" pb="3rem">
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
    </Flex>
  );
};

export default DictionaryList;
