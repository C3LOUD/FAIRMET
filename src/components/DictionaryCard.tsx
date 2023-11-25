import { Box, Card, CardBody, Image, Text } from "@chakra-ui/react";
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
      _hover={{ bgColor: "tint.500" }}
    >
      <CardBody p="0">
        <Box overflow="hidden">
          <Box _hover={{ transform: "scale(105%)" }}>
            <Image
              objectFit="cover"
              src={`/image/Brand/${brand.title}/logo.png`}
              alt={brand.title}
            />
          </Box>
        </Box>
        <Text>{brand.title}</Text>
      </CardBody>
    </Card>
  );
};

export default DictionaryCard;
