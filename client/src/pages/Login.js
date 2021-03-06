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

import { LOGIN } from "../utils/mutation";
import Auth from "../utils/auth";

function Login() {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error }] = useMutation(LOGIN);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const dataResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const data = dataResponse.data.login.token;
      Auth.login(data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    // <Box bgColor="#E2E8F0">
    <Center>
      <Box w="30%" mt={48} mb={96}>
        <Tabs isFitted mb={8}>
          <TabList>
            <Tab>
              <h2>Login</h2>
            </Tab>
            <Tab>
              <RouterLink to="/signup">Signup</RouterLink>
            </Tab>
          </TabList>
        </Tabs>

        <form onSubmit={handleFormSubmit}>
          <FormControl isRequired>
            <FormLabel htmlFor="email">Email:</FormLabel>
            <Input
              mb={8}
              id="email"
              name="email"
              type="email"
              placeholder="email..."
              onChange={handleChange}
            />

            <FormLabel htmlFor="password">Password:</FormLabel>
            <Input
              mb={4}
              placeholder="password"
              name="password"
              type="password"
              id="pwd"
              onChange={handleChange}
            />

            {error ? (
              <Text mb={4}>
                <p className="error-text">Wrong Email or password</p>
              </Text>
            ) : null}

            <Center>
              <Button colorScheme='blue' mt={8} type="submit">
                Submit
              </Button>
            </Center>
          </FormControl>
        </form>
      </Box>
    </Center>
  );
}

export default Login;
