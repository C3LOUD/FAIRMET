import { Button } from "@chakra-ui/react";
import React from "react";

type Props = {
  onClick: (e: React.MouseEvent) => void;
};

const ViewMoreBtn = ({ onClick }: Props) => {
  return (
    <Button
      variant="outline"
      type="button"
      onClick={onClick}
      position="absolute"
      bottom="0"
      translateY="120%"
      transform="auto"
    >
      {"View More"}
    </Button>
  );
};

export default ViewMoreBtn;
