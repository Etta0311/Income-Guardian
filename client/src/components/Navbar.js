import React from "react";
import Auth from "./../utils/auth";
import { Link as RouterLink } from "react-router-dom";
import {
  Tabs,
  TabList,
  Tab,
  Image,
  Center,
  Spacer,
  Box,
} from "@chakra-ui/react";

// When user is logged in show dashboard
function Nav() {
  if (Auth.loggedIn()) {
    return (
      <header>
        <Box w="100%" bgColor="#2C5282">
          <Box m="auto" maxW="2400px">
            <Box
              display={{ base: "block", md: "flex", lg: "flex" }}
              align="center"
              p={4}
            >
              <Image
                h="100"
                src="./assets/logo.png"
                alt="IG logo"
              ></Image>
              <Spacer />
              <Center>
                <Tabs color="#BEE3F8" variant="unstyled" pt={8}>
                  <TabList>
                    <Tab>
                      <RouterLink to="/">Home</RouterLink>
                    </Tab>
                    <Tab>
                      <RouterLink to="/dashboard">Dashboard</RouterLink>
                    </Tab>
                    <Tab>
                      <RouterLink to="/Donate">Donation</RouterLink>
                    </Tab>
                    <Tab>
                      <a href="/" onClick={() => Auth.logout()}>
                        Logout
                      </a>
                    </Tab>
                  </TabList>
                </Tabs>
              </Center>
            </Box>
          </Box>
        </Box>
      </header>
    );
  } else {
    return (
      <header>
        <Box w="100%" bgColor="#2C5282">
          <Box m="auto" maxW="2400px">
            <Box
              display={{ base: "block", md: "flex", lg: "flex" }}
              align="center"
              p={4}
            >
              <Image
                src="./assets/logo.png"
                alt="IG logo"
                h="100"
              ></Image>
              <Spacer />
              <Center>
                <Box>
                  <Tabs color="#BEE3F8" variant="unstyled" pt={8}>
                    <TabList>
                      <Tab>
                        <RouterLink to="/">Home</RouterLink>
                      </Tab>
                      <Tab>
                        <RouterLink to="/dashboard">Dashboard</RouterLink>
                      </Tab>
                      <Tab>
                        <RouterLink to="/login">Login/Sign Up</RouterLink>
                      </Tab>
                    </TabList>
                  </Tabs>
                </Box>
              </Center>
            </Box>
          </Box>
        </Box>
      </header>
    );
  }
}

export default Nav;