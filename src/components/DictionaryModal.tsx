import {
  Box,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { Brand } from "../types";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  brand: Brand;
};

const DictionaryModal: React.FC<Props> = ({ isOpen, onClose, brand }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent
        my="auto"
        rounded="none"
        h="56rem"
        maxW="80rem"
        display="flex"
        flexDirection="row"
        overflow="hidden"
      >
        <VStack
          overflowY="auto"
          css={{
            "&::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          {/* {product.Variants[0].ProductImages.map((src: string, i: number) => (
            <Image
              src={src}
              alt={`${product.Variants[0].ColorName} ${i + 1}`}
            />
          ))} */}
        </VStack>
        <Box>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalBody>Modal Body</ModalBody>
        </Box>
      </ModalContent>
    </Modal>
  );
};

export default DictionaryModal;
