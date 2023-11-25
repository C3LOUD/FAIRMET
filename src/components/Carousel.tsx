import {
  Box,
  Button,
  Grid,
  Slider,
  SliderThumb,
  SliderTrack,
} from "@chakra-ui/react";
import { PropsWithChildren, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const Carousel: React.FC<PropsWithChildren> = ({ children }) => {
  const [showLeftBtn, setShowLeftBtn] = useState<boolean>(false);
  const [showRightBtn, setShowRightBtn] = useState<boolean>(true);
  const [currentOffset, setCurrentOffset] = useState<number>(0);
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

    setCurrentOffset(
      ((containerRef.current?.getClientRects()[0].x! -
        ref.current?.firstElementChild?.getClientRects()[0].x! +
        containerRef.current?.offsetWidth! / 2) /
        ref.current?.offsetWidth!) *
        100
    );
  };

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
    <Box position="relative">
      <Box
        position="absolute"
        width="100%"
        height="100%"
        bgColor="pink"
        zIndex={10}
      >
        This is modal
      </Box>
      <Box
        position="absolute"
        width="20%"
        top="0"
        right="0"
        transform="auto"
        translateY="-100%"
      >
        <Box position="relative">
          <Slider
            aria-label="slider-ex-1"
            overflow="hidden"
            defaultValue={0}
            value={currentOffset}
          >
            <SliderTrack />
            <SliderThumb
              transition="linear"
              transitionDuration="0.1s"
              rounded="none"
              h="100%"
              w={containerRef.current?.offsetWidth! / ref.current?.offsetWidth!}
              bgColor="secondary"
            />
          </Slider>
          <Box
            zIndex={10}
            w="100%"
            h="100%"
            bgColor="transparent"
            position="absolute"
            top="0"
            left="0"
          />
        </Box>
      </Box>
      <Box overflow="hidden" ref={containerRef}>
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
            {children}
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
  );
};

export default Carousel;
