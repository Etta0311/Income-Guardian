import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
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
} from "@chakra-ui/react";
import Auth from "../utils/auth";
import { SIGNUP } from "../utils/mutation";

function Signup() {
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [signUp] = useMutation(SIGNUP);

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
      const dataResponse = await signUp({
        variables: {
          username: formState.username,
          email: formState.email,
          password: formState.password,
        },
      });

      const token = dataResponse.data.signUp.token;
      Auth.login(token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Center>
      <Box w="30%" mt={48} mb={96}>
        <Tabs isFitted mb={8}>
          <TabList>
            <Tab>
              <RouterLink to="/login">Login</RouterLink>
            </Tab>

            <Tab>
              <h2>Signup</h2>
            </Tab>
          </TabList>
        </Tabs>

        <form onSubmit={handleFormSubmit}>
          <FormControl isRequired>
            <FormLabel htmlFor="email">Username</FormLabel>
            <Input
              mb={8}
              id="username"
              name="username"
              type="username"
              placeholder="usename"
              onChange={handleChange}
            />

            <FormLabel htmlFor="email">Email:</FormLabel>
            <Input
              mb={8}
              id="email"
              name="email"
              type="email"
              placeholder="email..."
              onChange={ handleChange }
            />

            <FormLabel htmlFor="password">Password:</FormLabel>
            <Input
              mb={4}
              placeholder="password"
              name="password"
              type="password"
              id="pwd"
              onChange={ handleChange }
            />

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

export default Signup;
