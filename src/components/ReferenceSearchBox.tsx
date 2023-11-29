import { Button, Flex, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { Filter, TagKey } from "../types";

type Props = {
  data: Filter[];
  tag: TagKey;
  filter: string[];
  setFilter: React.Dispatch<React.SetStateAction<string[]>>;
};

const ReferenceSearchBox = ({ data, tag, filter, setFilter }: Props) => {
  return (
    <VStack flex="1" maxW="100%" w="100%" h="12rem" overflow="hidden">
      <Text>{tag}</Text>
      <Flex flexDirection="column" w="100%" overflowY="auto">
        {data
          .find((el) => el.type === tag)!
          .options.map((option: string, i: number) => {
            const isActive = filter.includes(option);
            return (
              <Button
                key={i}
                variant="link"
                rounded="none"
                p="0"
                w="5rem"
                h="fit-content"
                wordBreak="break-word"
                whiteSpace="break-spaces"
                fontSize="sm"
                onClick={(e: React.MouseEvent) => {
                  e.preventDefault();
                  const newFilter = isActive
                    ? filter.filter((el) => el !== option)
                    : [...filter, option];
                  setFilter(newFilter);
                }}
              >
                {option}
              </Button>
            );
          })}
      </Flex>
    </VStack>
  );
};

export default ReferenceSearchBox;
