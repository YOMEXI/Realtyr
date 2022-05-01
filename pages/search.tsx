import { useRouter } from "next/router";
import Image from "next/image";
import { Box, Flex, Text, Icon } from "@chakra-ui/react";

import { BsFilter } from "react-icons/bs";
import { useState } from "react";
import SearchFilters from "../components/searchFilters";
import { PropertyType } from "../Types/propertyTypes";
import Property from "../components/Property";
import { baseURL, fetchApi } from "../utils/fetchApi";

const Search = ({ properties }: any) => {
  const [searchFilters, setSearchFilters] = useState(false);

  const router = useRouter();
  return (
    <Box>
      <Flex
        fontSize={"lg"}
        bg="blue.300"
        cursor={"pointer"}
        justifyContent={"center"}
        alignItems="center"
        p={"2"}
        onClick={() => setSearchFilters((prev) => !prev)}
      >
        <Text>Search Property By Filters</Text>
        <Icon paddingLeft={"2"} as={BsFilter} w="7" />
      </Flex>
      {searchFilters && <SearchFilters />}

      <Text fontSize={"2xl"} p="4" fontWeight={"bold"}>
        Properties {router.query.purpose}
      </Text>

      <Flex flexWrap={"wrap"} justifyContent="center" alignItems={"center"}>
        {properties.map((property: PropertyType) => (
          <Property property={property} key={property.id} />
        ))}
      </Flex>

      {properties.length === 0 && (
        <Flex justifyContent={"center"} alignItems="center" marginTop={"5"}>
          <Image src="/img/nodata.png" alt="no data" height={500} width={500} />
        </Flex>
      )}
    </Box>
  );
};

export default Search;

export async function getServerSideProps({ query }: any) {
  const purpose = query.purpose || "for-rent";
  const rentFrequency = query.rentFrequency || "yearly";
  const minPrice = query.minPrice || "0";
  const maxPrice = query.maxPrice || "1000000";
  const roomsMin = query.roomsMin || "0";
  const bathsMin = query.bathsMin || "0";
  const sort = query.sort || "price-desc";
  const areaMax = query.areaMax || "35000";
  const locationExternalIDs = query.locationExternalIDs || "5002";
  const categoryExternalID = query.categoryExternalID || "4";

  const data = await fetchApi(
    `${baseURL}/properties/list?locationExternalIDs=${locationExternalIDs}&purpose=${purpose}&categoryExternalID=${categoryExternalID}&bathsMin=${bathsMin}&rentFrequency=${rentFrequency}&priceMin=${minPrice}&priceMax=${maxPrice}&roomsMin=${roomsMin}&sort=${sort}&areaMax=${areaMax}`
  );

  //
  return {
    props: {
      properties: data?.hits,
    },
  };
}
