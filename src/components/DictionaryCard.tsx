import { Card, CardBody, CardHeader, VStack } from "@chakra-ui/react";
import React from "react";
import { Brand } from "../types";

type Props = {
  brand: Brand;
  onClick: (e: React.MouseEvent) => void;
};

const DictionaryCard: React.FC<Props> = ({ brand, onClick }) => {
  return (
    <Card
      w="18rem"
      as="button"
      onClick={onClick}
      cursor="pointer"
      id={brand.id}
      border="none"
      shadow="none"
      transform="auto"
      transition="all"
      maxW="18rem"
      _hover={{ bgColor: "tint.500" }}
    >
      <CardHeader>{brand.title}</CardHeader>
      <CardBody p="0">
        <VStack>
          {/* <Image
            src={product.Variants[0].ProductImages[0]}
            alt={product.DisplayName}
          /> */}
        </VStack>
      </CardBody>
    </Card>
  );
};

export default DictionaryCard;
