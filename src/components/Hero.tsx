import { Box, Button, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import { faker } from "@faker-js/faker";
import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

type HeroCard = {
  id: string;
  title: string;
  content: string;
  image: string;
};

const cardLength = 10;

const Hero = () => {
  const [heroCardList, setHeroCardList] = useState<(HeroCard | undefined)[]>(
    []
  );
  const [index, setIndex] = useState<number>(0);

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

  const leftHandler = (e: React.MouseEvent) => {
    e.preventDefault();
    if (index <= 0) return setIndex(cardLength - 1);
    setIndex((prev) => prev - 1);
  };

  const rightHandler = (e: React.MouseEvent) => {
    e.preventDefault();
    if (index > cardLength - 1) return setIndex(1);
    setIndex((prev) => prev + 1);
  };

  return (
    <Box as="section" id="hero">
      <Box position="relative">
        <Grid
          maxW="71.25rem"
          gap="0.5rem"
          gridAutoFlow="column"
          overflowX="auto"
          overscrollBehavior="auto"
          scrollBehavior="smooth"
          h="36rem"
          css={{
            "&::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          {heroCardList.map((el) => (
            <GridItem
              key={el?.id}
              position="relative"
              transform="auto"
              translateX={-index * 239}
              h="100%"
              minW="max-content"
            >
              <Image
                src={el?.image}
                alt={el?.title}
                h="36rem"
                objectFit="cover"
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
                {el?.title}
              </Text>
            </GridItem>
          ))}
        </Grid>
        <Button
          variant="unstyled"
          textColor="black"
          position="absolute"
          fontSize="28"
          transform="auto"
          top="50%"
          translateY="-50%"
          left="0"
          translateX="-50%"
          p="0"
          onClick={leftHandler}
        >
          <FaChevronLeft />
        </Button>
        <Button
          variant="unstyled"
          textColor="black"
          position="absolute"
          fontSize="28"
          transform="auto"
          top="50%"
          translateY="-50%"
          right="0"
          translateX="50%"
          p="0"
          onClick={rightHandler}
        >
          <FaChevronRight />
        </Button>
      </Box>
    </Box>
  );
};

export default Hero;
