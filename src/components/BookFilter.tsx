import { Button, HStack } from "@chakra-ui/react";
import React from "react";

const bookFilter = ["ALL", "PICK", "WEAR", "STYLE", "OTHER"];

type Props = {
  resetState?: () => void;
  active: string;
  setActive: React.Dispatch<React.SetStateAction<string>>;
};

const BookFilter: React.FC<Props> = ({ resetState, active, setActive }) => {
  return (
    <HStack
      pt="1rem"
      display="flex"
      borderBottom="1px"
      borderBottomStyle="solid"
      borderBottomColor="shade.500"
      // bgColor="tint.500"
    >
      {bookFilter.map((filter, i) => (
        <Button
          fontSize={active === filter ? 28 : 20}
          _hover={{
            border: "none",
            fontSize: active === filter ? 28 : 24,
          }}
          transition="all 0.2s ease-in-out"
          h="2rem"
          variant="link"
          flex="1"
          key={i}
          type="button"
          fontWeight="400"
          fontStyle="italic"
          onClick={(e) => {
            e.preventDefault();
            setActive(filter);
            resetState?.();
          }}
        >
          {filter}
        </Button>
      ))}
    </HStack>
  );
};

export default BookFilter;
