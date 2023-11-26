import { Box, Button } from "@chakra-ui/react";
import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

type Props = {
  to: string;
};

const FindMoreBtn: React.FC<Props> = ({ to }) => {
  return (
    <Button
      variant="link"
      position="absolute"
      bottom="0"
      translateY="100%"
      right="1rem"
      transform="auto"
      borderBottom="solid 2px"
      rounded="none"
      pl="10rem"
      _hover={{ textColor: "gray.600" }}
    >
      <Box position="relative">
        <Link to={to}>{"Find More \uFF08Seek your air\uFF09"}</Link>
        <Box
          position="absolute"
          right="0"
          bottom="0"
          transform="auto"
          translateY="55%"
          translateX="45%"
        >
          <FaChevronRight />
        </Box>
      </Box>
    </Button>
  );
};

export default FindMoreBtn;
