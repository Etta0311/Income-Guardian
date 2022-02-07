import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import {
  FormControl,
  FormLabel,
  Button,
  Box,
  Center,
  Input,
  Tabs,
  TabList,
  Tab,
  Text,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

import { LOGIN } from "./utils/mutations";
import Auth from "../utils/auth";

function Login(props) {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error }] = useMutation(LOGIN);
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <>
      <Center>
        <Box mt={8}>
          <Tabs defaultIndex={1} mb={4} variant="enclosed">
            <TabList>
              <Tab>
                <RouterLink to="/signup">← Signup</RouterLink>
              </Tab>

              <Tab>
                <h2>Login</h2>
              </Tab>
            </TabList>
          </Tabs>
          <form onSubmit={handleFormSubmit}>
            <FormControl>
              <FormLabel htmlFor="email">Email:</FormLabel>
              <Input
                mb={4}
                name="email"
                type="email"
                id="email"
                onChange={handleChange}
              />

              <FormLabel htmlFor="pwd">Password:</FormLabel>
              <Input
                mb={4}
                placeholder="******"
                name="password"
                type="password"
                id="pwd"
                onChange={handleChange}
              />
              {error ? (
                <Text mb={4}>
                  <p className="error-text">
                    The email or password you provided is incorrect
                  </p>
                </Text>
              ) : null}
              <Button mb={4} type="submit">
                Submit
              </Button>
            </FormControl>
          </form>
        </Box>
      </Center>
    </>
  );
}

export default Login;