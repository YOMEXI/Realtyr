import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import {
  Box,
  Flex,
  Text,
  Icon,
  Select,
  Spinner,
  Button,
} from "@chakra-ui/react";
import { MdCancel } from "react-icons/md";
import { filterData, getFilterValues } from "../utils/filterData";

const SearchFilters = () => {
  const [filters, setFilters] = useState(filterData);
  const router = useRouter();

  const searchProperties = (filterValues: any) => {
    const path = router.pathname;

    const { query } = router;

    const values = getFilterValues(filterValues);

    values.forEach((item) => {
      if (item.value && filterValues?.[item.name]) {
        query[item.name] = item.value;
      }
    });

    router.push({ pathname: path, query: query });
  };

  return (
    <Flex
      bg="blue.300"
      cursor={"pointer"}
      justifyContent={"center"}
      alignItems="center"
      flexWrap={"wrap"}
      p="4"
    >
      {filters.map((filter: any) => (
        <Box key={filter.queryName}>
          <Select
            placeholder={filter.placeholder}
            p="2"
            w="fit-content"
            cursor="pointer"
            onChange={(e) =>
              searchProperties({ [filter.queryName]: e.target.value })
            }
          >
            {filter?.items?.map((item: any) => (
              <option value={item.value} key={item.value}>
                {item.name}
              </option>
            ))}
          </Select>
        </Box>
      ))}
    </Flex>
  );
};

export default SearchFilters;
