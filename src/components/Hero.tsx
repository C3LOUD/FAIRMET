import { Box, Button, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import { faker } from "@faker-js/faker";
import { useEffect, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

type HeroCard = {
  id: string;
  title: string;
  content: string;
  image: string;
};

const cardLength = 10;

const Hero = () => {
  const [heroCardList, setHeroCardList] = useState<HeroCard[]>([]);
  const [showLeftBtn, setShowLeftBtn] = useState<boolean>(false);
  const [showRightBtn, setShowRightBtn] = useState<boolean>(true);
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  const onScrollHandler = () => {
    if (
      containerRef.current?.getClientRects()[0].right ===
        ref.current?.lastElementChild?.getClientRects()[0].right &&
      showRightBtn
    ) {
      setShowRightBtn(false);
    } else if (
      containerRef.current?.getClientRects()[0].right !==
        ref.current?.lastElementChild?.getClientRects()[0].right &&
      !showRightBtn
    ) {
      setShowRightBtn(true);
    }

    if (
      containerRef.current?.getClientRects()[0].left ===
        ref.current?.firstElementChild?.getClientRects()[0].left &&
      showLeftBtn
    ) {
      setShowLeftBtn(false);
    } else if (
      containerRef.current?.getClientRects()[0].left !==
        ref.current?.firstElementChild?.getClientRects()[0].left &&
      !showLeftBtn
    ) {
      setShowLeftBtn(true);
    }
  };

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
    if (!ref.current) return;
    let elToShow = 0;
    for (const [i, el] of [...ref.current.children].entries()) {
      if (
        el.getClientRects()[0].left >=
        containerRef.current?.getClientRects()[0].x!
      ) {
        elToShow = i - 1;
        break;
      }
    }

    const offset =
      ref.current.children[elToShow < 0 ? 0 : elToShow].getClientRects()[0]
        .left - ref.current.children[0].getClientRects()[0].x!;

    innerRef.current?.scrollTo(offset, 0);
  };

  const rightHandler = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!ref.current) return;
    let elToShow = 0;
    for (const [i, el] of [...ref.current.children].entries()) {
      if (
        el.getClientRects()[0].right >
        containerRef.current?.offsetWidth! +
          containerRef.current?.getClientRects()[0].x!
      ) {
        elToShow = i;
        break;
      }
    }

    const offset =
      ref.current.children[elToShow].getClientRects()[0].left -
      ref.current.children[0].getClientRects()[0].x!;

    innerRef.current?.scrollTo(offset, 0);
  };

  return (
    <Box as="section" id="hero">
      <Box position="relative">
        <Box maxW="71.25rem" overflow="hidden" ref={containerRef}>
          <Box
            overflowX="auto"
            scrollBehavior="smooth"
            ref={innerRef}
            onScroll={onScrollHandler}
            css={{
              "&::-webkit-scrollbar": {
                display: "none",
              },
            }}
          >
            <Grid
              ref={ref}
              w="max-content"
              maxW="max-content"
              gap="0.5rem"
              gridAutoFlow="column"
              h="36rem"
            >
              {heroCardList.map((heroCard) => (
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
            </Grid>
          </Box>
        </Box>
        {showLeftBtn && (
          <Button
            variant="unstyled"
            textColor="secondary"
            position="absolute"
            fontSize="28"
            rounded="none"
            display="flex"
            justifyContent="center"
            alignItems="center"
            transform="auto"
            top="50%"
            translateY="-50%"
            left="0"
            bg="white"
            p="0"
            onClick={leftHandler}
          >
            <FaChevronLeft />
          </Button>
        )}
        {showRightBtn && (
          <Button
            variant="unstyled"
            textColor="secondary"
            position="absolute"
            fontSize="28"
            bgColor="white"
            rounded="none"
            display="flex"
            justifyContent="center"
            alignItems="center"
            transform="auto"
            top="50%"
            translateY="-50%"
            right="0"
            p="0"
            onClick={rightHandler}
          >
            <FaChevronRight />
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default Hero;
