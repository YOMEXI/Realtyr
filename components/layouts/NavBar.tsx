import { FcMenu, FcHome, FcAbout } from "react-icons/fc";
import { BsSearch } from "react-icons/bs";
import { FiKey } from "react-icons/fi";
import {
  Box,
  Flex,
  IconButton,
  List,
  ListIcon,
  ListItem,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
} from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";

const NavBar = () => {
  const router = useRouter();
  return (
    <>
      <Flex
        p="2"
        borderBottom="1px"
        borderColor="grey.500"
        justifyContent="space-between"
        alignItems="center"
      >
        <Flex>
          <Box fontSize="3xl" color="blue.600" p={"2"} fontWeight="bold">
            <Link href="/" passHref>
              Realty
            </Link>
          </Box>
        </Flex>
        <Flex>
          <Link href="/search" passHref>
            <Box color="blue.900" fontSize="1.5rem" cursor={"pointer"}>
              <BsSearch />
            </Box>
          </Link>
        </Flex>
        <Flex flexDirection="column" w="60%" className="menuView">
          <List
            sx={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <ListItem className="navbar">
              <Link href="/" passHref>
                Home
              </Link>
            </ListItem>

            <ListItem className="navbar">
              <Link href="/search?purpose=for-rent" passHref>
                Rent a house
              </Link>
            </ListItem>
            <ListItem className="navbar">
              <Link href="/search?purpose=for-sale" passHref>
                Buy a house
              </Link>
            </ListItem>
          </List>
        </Flex>
        <Box sx={{ display: { md: "none" } }}>
          <Menu>
            <MenuButton
              as={IconButton}
              icon={<FcMenu />}
              variant="outlined"
              color="red.500"
            />
            <MenuList>
              <Link href="/" passHref>
                <MenuItem icon={<FcHome />}>Home</MenuItem>
              </Link>
              <Link href="/search" passHref>
                <MenuItem icon={<BsSearch />}>Search</MenuItem>
              </Link>
              <Link href="/search?purpose=for-sale" passHref>
                <MenuItem icon={<FcAbout />}>Buy a house</MenuItem>
              </Link>
              <Link href="/search?purpose=for-rent" passHref>
                <MenuItem icon={<FcAbout />}>Rent a house</MenuItem>
              </Link>
            </MenuList>
          </Menu>
        </Box>
      </Flex>
    </>
  );
};

export default NavBar;
