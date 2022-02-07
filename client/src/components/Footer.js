import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Image, Box, Wrap, Center, Link } from "@chakra-ui/react";

function Footer() {
  return (
    <Box mt={8} py={8} bgColor="#2C5282">
      <Center>
        <Box display="flex" p={5} color="#BEE3F8">
          <Wrap justify="center">
            <Link px={4}>Privacy Policy</Link>
            <Link px={4}>FAQ</Link>
            <Link px={4}>Contact</Link>
            <Link px={4}>Terms &amp; Conditions</Link>
          </Wrap>
        </Box>
      </Center>
      <Center h="50px" color="#BEE3F8">
        INCOME GUARDIAN &copy; 2022
      </Center>
    </Box>
  );
}

export default Footer;
