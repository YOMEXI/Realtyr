import { Box, Button, Flex, Text } from "@chakra-ui/react";
import axios from "axios";
import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { baseURL, fetchApi } from "../utils/fetchApi";

const Banner = ({
  purpose,
  imgUrl,
  title1,
  title2,
  desc1,
  desc2,
  linkName,
  buttonText,
}: any) => {
  //
  return (
    <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10">
      <Image src={imgUrl} width={500} height={300} alt="banner" />
      <Box p="5">
        <Text color="gray.900" fontSize="sm" fontWeight="medium">
          {purpose}
        </Text>
        <Text
          fontSize="2xl"
          fontWeight="bold"
          p={"2"}
          borderRadius="10px"
          background={"black"}
          color="white"
        >
          {title1}
          <br />
          {title2}
        </Text>
        <Text fontSize="lg" color="grey.500">
          {desc1}
          <br />
          {desc2}
        </Text>
        <Button bg={"black"} color="white">
          <Link href={linkName}>{buttonText}</Link>
        </Button>
      </Box>
    </Flex>
  );
};

export default Banner;
