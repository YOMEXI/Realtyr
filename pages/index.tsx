import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import Banner from "../components/Banner";
import Property from "../components/Property";
import { PropertyType } from "../Types/propertyTypes";
import { baseURL, fetchApi } from "../utils/fetchApi";

export default function Home({ propertiesForSale, propertiesForRent }: any) {
  return (
    <Box>
      <Banner
        purpose=""
        title1="Amazing Homes for "
        title2="Sale"
        desc1="Explore modern Villas, Blocks, and Homes"
        desc2="and more"
        linkName="/search?purpose=for-sale"
        imgUrl="/img/homeRent.jpg"
        buttonText=" Buy a Perfect Home"
      />
      <Flex flexWrap="wrap" className="propertybox">
        {propertiesForSale?.hits?.map((property: PropertyType) => (
          <Property property={property} key={property.id} />
        ))}
      </Flex>
      <Banner
        purpose=""
        title1="Cool Rental Homes for "
        title2="You"
        desc1="Explore modern Villas, Blocks, and Homes"
        desc2="and more"
        linkName="/search?purpose=for-rent"
        imgUrl="/img/apartmentRent.jpg"
        buttonText="Explore Rentals"
      />
      <Flex flexWrap="wrap">
        {propertiesForRent?.hits?.map((property: PropertyType) => (
          <Property property={property} key={property.id} />
        ))}
      </Flex>
    </Box>
  );
}

export async function getStaticProps() {
  const propertyForSale = await fetchApi(
    `${baseURL}/properties/list/?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`
  );

  const propertyForRent = await fetchApi(
    `${baseURL}/properties/list/?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`
  );
  //
  return {
    props: {
      propertiesForSale: propertyForSale,
      propertiesForRent: propertyForRent,
    },
  };
}
