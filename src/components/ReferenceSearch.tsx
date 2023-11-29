import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Flex,
  HStack,
  Select,
  Tag,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useRouteLoaderData } from "react-router-dom";
import { Brand, Filter, TagKey } from "../types";
import { getBrands } from "../util/getBrands";
import DictionaryList from "./DictionaryList";
import FindMoreBtn from "./FindMoreBtn";
import Pagination from "./Pagination";
import ReferenceSearchBox from "./ReferenceSearchBox";
import ReferenceSearchTabFilter from "./ReferenceSearchTabFilter";
import SeekMoreBtn from "./SeekMoreBtn";

const rows = 3;

export enum PaginationType {
  normal,
  infinite,
}

type Props = {
  type: PaginationType;
  initLimit: number;
};

const upperTags: TagKey[] = [
  "Style, Occasion & Dressing Type",
  "Function & Activity",
  "Notable Category & Item",
  "Country & Region",
  "Item & Category",
];
const lowerTags: TagKey[] = ["Field", "Price", "Price", "Sort"];

const ReferenceSearch: React.FC<Props> = ({ type, initLimit }) => {
  const [filter, setFilter] = useState<string[]>([]);
  const [brands, setBrands] = useState<Brand[]>([]);
  const [limit, setLimit] = useState<number>(initLimit);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [total, setTotal] = useState<number>(1);

  const data = useRouteLoaderData("filters") as {
    filters: Filter[];
    items: Filter[];
  };

  useEffect(() => {
    getBrands({ ...(filter.length !== 0 && { filter }) }).then((res) =>
      setTotal(res.length)
    );
  }, [filter]);

  useEffect(() => {
    getBrands({
      limit: limit * rows,
      ...(type === PaginationType.normal && {
        skip: (currentPage - 1) * limit * rows,
      }),
      ...(filter.length !== 0 && { filter }),
    }).then((res) => setBrands(res));
  }, [limit, currentPage, type, filter]);

  return (
    <>
      <HStack justifyContent="end">
        {type === PaginationType.normal && (
          <>
            <Text>{"Limit"}</Text>
            <Select
              w="fit-content"
              h="fit-content"
              border="none"
              defaultValue={initLimit}
              onChange={(e) => {
                setLimit(Number(e.target.value));
                setCurrentPage(1);
              }}
            >
              {Array.from(
                { length: Math.ceil(total / rows) },
                (_, index) => index + 1
              ).map((index, i) => (
                <option key={i} value={index}>
                  {index}
                </option>
              ))}
            </Select>
          </>
        )}
        <Text>{"Sort by\uFF1A"}</Text>
        <Select
          w="fit-content"
          h="fit-content"
          border="none"
          _focus={{ ring: "none" }}
        >
          <option value="RANDOM">{"RANDOM"}</option>
          <option value="DATE">{"DATE"}</option>
          <option value="CHAR">{"A-Z \uFF08CAPITAL\uFF09"}</option>
          <option value="RANDOM">{"RANDOM"}</option>
        </Select>
      </HStack>
      <Accordion allowToggle mb="1rem">
        <AccordionItem bgColor="tint.600">
          <AccordionButton p="0">
            <Box
              as="span"
              flex="1"
              textAlign="right"
              fontWeight="700"
              px="1rem"
              textColor="shade.500"
            >
              {"Filter and Order by"}
            </Box>
          </AccordionButton>

          <AccordionPanel pb={4} bgColor="tint.100">
            <Flex>
              {upperTags.map((tag, i) => (
                <ReferenceSearchBox
                  key={i}
                  data={data.filters}
                  tag={tag}
                  filter={filter}
                  setFilter={setFilter}
                />
              ))}
            </Flex>
            <Flex>
              {lowerTags.map((tag, i) => (
                <ReferenceSearchBox
                  key={i}
                  data={data.filters}
                  tag={tag}
                  filter={filter}
                  setFilter={setFilter}
                />
              ))}
            </Flex>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>

      <ReferenceSearchTabFilter
        filter={filter}
        items={data.items}
        setFilter={setFilter}
      />

      {filter.length !== 0 && (
        <HStack mb="1rem">
          {filter.map((el, i) => (
            <Tag
              bgColor="white"
              rounded="none"
              border="1px"
              key={i}
              textColor="shade.500"
              fontWeight="700"
              fontStyle="italic"
            >
              {el}
            </Tag>
          ))}
          <Button
            p="0"
            h="fit-content"
            variant="link"
            fontStyle="italic"
            _hover={{
              border: "none",
              textColor: "shade",
            }}
            onClick={(e: React.MouseEvent) => {
              e.preventDefault();
              setFilter([]);
            }}
          >
            {"Clear All"}
          </Button>
        </HStack>
      )}
      <Flex alignItems="center" direction="column">
        {brands.length !== 0 && (
          <DictionaryList rows={rows} limit={limit} brands={brands} />
        )}
        {type === PaginationType.infinite &&
          (total > brands.length ? (
            <SeekMoreBtn setLimit={setLimit} />
          ) : (
            <FindMoreBtn to="/dictionary" />
          ))}
        {type === PaginationType.normal && limit * rows < total && (
          <Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            total={Math.ceil(total / (rows * limit))}
          />
        )}
      </Flex>
    </>
  );
};

export default ReferenceSearch;
