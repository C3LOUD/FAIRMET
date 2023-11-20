import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Image,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { Brand } from "../types";

type Props = {
  brand: Brand;
  onClick: (e: React.MouseEvent) => void;
};

const DictionaryCard: React.FC<Props> = ({ brand, onClick }) => {
  return (
    <Card
      as="button"
      onClick={onClick}
      cursor="pointer"
      id={brand.id}
      border="none"
      shadow="none"
      transform="auto"
      transition="all"
      maxW="18rem"
      _hover={{ bgColor: "gray.200" }}
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
