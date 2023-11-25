import { Box, GridItem, Image, Text } from "@chakra-ui/react";
import { faker } from "@faker-js/faker";
import { useEffect, useState } from "react";
import Carousel from "./Carousel";

type HeroCard = {
  id: string;
  title: string;
  content: string;
  image: string;
};

const cardLength = 10;

const Hero = () => {
  const [heroCardList, setHeroCardList] = useState<HeroCard[]>([]);
  const [imageLoading, setImageLoading] = useState<boolean[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    const res = new Array(cardLength).fill(null).map((_, i) => ({
      id: faker.string.uuid(),
      title: faker.lorem.lines({ min: 1, max: 1 }),
      content: faker.lorem.paragraph(),
      image: faker.image.url({
        height: i % 2 === 0 ? 480 : 640,
        width: i % 2 === 0 ? 640 : 480,
      }),
    }));

    setHeroCardList(res);
  }, []);

  useEffect(() => {
    const allImageIsLoaded = imageLoading.every((status) => !status);
    setIsLoading(!allImageIsLoaded);
  }, [imageLoading]);

  return (
    <Box as="section" id="hero" w="100%">
      <Carousel isReady={!isLoading} showProgressBar>
        {heroCardList.map((heroCard, i) => (
          <GridItem
            key={heroCard?.id}
            position="relative"
            h="100%"
            minW="max-content"
          >
            <Image
              src={heroCard?.image}
              alt={heroCard?.title}
              h="36rem"
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
            <Text
              bg="white"
              position="absolute"
              bottom="5"
              left="50%"
              transform="auto"
              translateX="-50%"
              w="100%"
              maxW="80%"
            >
              {heroCard?.title}
            </Text>
          </GridItem>
        ))}
      </Carousel>
    </Box>
  );
};

export default Hero;
