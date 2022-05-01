import { Box } from "@chakra-ui/react";
import Head from "next/head";
import React from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";

const Layout = ({ children }: any) => {
  return (
    <>
      <Head>
        <title>Realty</title>
      </Head>
      <Box maxWidth="1380px" m="auto" className="siteContainer">
        <header>
          <NavBar />
        </header>

        <main>{children}</main>
        <footer>
          <Footer />
        </footer>
      </Box>
    </>
  );
};

export default Layout;
