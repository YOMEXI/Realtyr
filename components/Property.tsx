import { Avatar, Box, Button, Flex, Text } from "@chakra-ui/react";
import axios from "axios";
import { GoVerified } from "react-icons/go";
import { BsGridFill } from "react-icons/bs";
import { FaBath, FaBed } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import millify from "millify";

const Property = ({
  property: {
    coverPhoto,
    price,
    rentFrequency,
    rooms,
    title,
    baths,
    area,
    agency,
    isVerified,
    externalID,
  },
}: any) => {
  return (
    <Link href={`/properties/${externalID}`} passHref>
      <Flex
        flexWrap="wrap"
        w="420px"
        p="5"
        paddingTop="0"
        justifyContent="center"
        cursor="pointer"
      >
        <Box className="singleproperty">
          <Image
            src={coverPhoto ? coverPhoto.url : "/img/home.jpg"}
            alt="house"
            width={400}
            height={260}
          />
        </Box>
        <Box w="full">
          <Flex
            paddingTop="2"
            alignItems="center"
            justifyContent="space-between"
          >
            <Flex alignItems="center">
              <Box paddingRight="3" color="green.600">
                {isVerified && <GoVerified />}
              </Box>
              <Text fontWeight="bold" fontSize="lg">
                AED {millify(price)} {rentFrequency && `/${rentFrequency}`}
              </Text>
            </Flex>
            <Box>
              <Avatar size="sm" src={agency?.logo?.url} />
            </Box>
          </Flex>
          <Flex
            alignItems="center"
            justifyContent="space-between"
            w="250px"
            color="blue.400"
          >
            {rooms} <FaBed /> | {baths} <FaBath /> | {millify(area)} sqft{" "}
            <BsGridFill />
          </Flex>

          <Text fontSize="lg">
            {title.length > 30 ? `${title.substring(0, 30)}....` : title}
          </Text>
        </Box>
      </Flex>
    </Link>
  );
};

export default Property;
