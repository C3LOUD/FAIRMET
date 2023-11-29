import { Box, Card, GridItem, Image, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Brand } from "../types";
import { getBrands } from "../util/getBrands";
import Carousel from "./Carousel";

const limit = 10;

const BrandCarousel = () => {
  const [brands, setBrands] = useState<Brand[]>([]);
  const [imageLoading, setImageLoading] = useState<boolean[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [active, setActive] = useState<string | null>(null);

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
          <Card
            border="none"
            boxShadow="none"
            w="100%"
            h="fit-content"
            onMouseEnter={() => {
              if (active === brand.id) return;
              setActive(brand.id);
            }}
            onMouseLeave={() => {
              if (active !== brand.id) return;
              setActive(null);
            }}
          >
            <Box position="relative">
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
              {active === brand.id && (
                <Box
                  position="absolute"
                  overflow="hidden"
                  top="0"
                  left="0"
                  w="100%"
                  h="100%"
                  bgColor="shade.alpha.700"
                  px="1rem"
                  pt="1rem"
                >
                  <Text textColor="primary">{brand.content}</Text>
                </Box>
              )}
            </Box>

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
