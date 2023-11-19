import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Image,
  VStack,
} from "@chakra-ui/react";
import React from "react";

type Props = { product: any; onClick: (e: React.MouseEvent) => void };

const DictionaryCard: React.FC<Props> = ({ product, onClick }) => {
  return (
    <Card
      as="button"
      onClick={onClick}
      cursor="pointer"
      id={product.ProductId}
      border="none"
      shadow="none"
      transform="auto"
      transition="all"
      maxW="18rem"
      _hover={{ bgColor: "gray.200" }}
    >
      <CardHeader>{product.DisplayName}</CardHeader>
      <CardBody p="0">
        <VStack>
          <Image
            src={product.Variants[0].ProductImages[0]}
            alt={product.DisplayName}
          />
          <Box
            wordBreak="break-all"
            whiteSpace="break-spaces"
            dangerouslySetInnerHTML={{
              __html: product.Description,
            }}
          />
        </VStack>
      </CardBody>
    </Card>
  );
};

export default DictionaryCard;
