import { Card, GridItem, Image, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Brand } from "../types";
import { getBrands } from "../util/getBrands";
import Carousel from "./Carousel";

const limit = 10;

const BrandCarousel = () => {
  const [brands, setBrands] = useState<Brand[]>([]);
  const [imageLoading, setImageLoading] = useState<boolean[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    getBrands({ limit }).then((res) => setBrands(res));
  }, []);

  useEffect(() => {
    const allImageIsLoaded = imageLoading.every((status) => !status);
    setIsLoading(!allImageIsLoaded);
  }, [imageLoading]);

  return brands.length ? (
    <Carousel isReady={!isLoading}>
      {brands.map((brand, i) => (
        <GridItem key={brand.id} h="100%" minW="max-content">
          <Card border="none" boxShadow="none">
            <Image
              src={`/image/Brand/${brand.title}/${brand.title}_1.jpg`}
              alt={brand.title}
              w="12rem"
              objectFit="cover"
              onLoadStart={() => {
                setImageLoading((prev) => {
                  const newArr = [...prev];
                  newArr[i] = true;
                  return newArr;
                });
              }}
              onLoad={() => {
                setImageLoading((prev) => {
                  const newArr = [...prev];
                  newArr[i] = false;
                  return newArr;
                });
              }}
            />
            <Text>{brand.title}</Text>
          </Card>
        </GridItem>
      ))}
    </Carousel>
  ) : (
    <Text>Empty</Text>
  );
};

export default BrandCarousel;
