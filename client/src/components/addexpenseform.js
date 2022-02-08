import React, { useState } from "react";
import { useMutation } from "@apollo/client";
// import { Link as RouterLink } from "react-router-dom";
import { ADD_EXPENCE } from "../utils/mutation";
import { QUERY_USER } from "../utils/queries";
import Auth from "./../utils/auth";

import {
    FormControl,
    FormLabel,
    Button,
    Box,
    Input,
    Text,
    Center,
  } from "@chakra-ui/react";

const Expenseform = ({Expense}) => {
  const [newExpense, setNewExpense] = useState({
    title: "",
    transactionAmount: "",
  });

  const [addExpense] = useMutation(ADD_EXPENCE, {
    refetchQueries: [{ query: QUERY_USER }],
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
        const user = Auth.getProfile();
        await addExpense({
          variables: {
            title: newExpense.title,
            transactionAmount: newExpense.transactionAmount,
            user: user.data._id,
          },
    });
    setNewExpense({
        title: "",
        transactionAmount: "",
      });
    } catch (error) {
        console.log(error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setNewExpense({
      ...newExpense,
      [name]: value,
    });
  };

  return (
    <>
      <Box w="30%" mt={4} pr={24}>
        <Center><Text p={4}>New Expense Record:</Text></Center>
        <form onSubmit={handleFormSubmit}>
          <FormControl>
            <FormLabel htmlFor="title">Title</FormLabel>
            <Input
              mb={4}
              value={newExpense.title}
              placeholder="Name this record"
              name="title"
              type="title"
              id="title"
              onChange={handleChange}
            />

            <FormLabel htmlFor="transactionAmount">Amount</FormLabel>
            <Input
              mb={4}
              placeholder="Amount"
              name="transactionAmount"
              value={newExpense.transactionAmount}
              type="transactionAmount"
              id="transactionAmount"
              onChange={handleChange}
            />

            <Center>
            <Button color="white" bgColor="#1a535c" mb={4} type="submit">
              ADD
            </Button>
            </Center>
          </FormControl>
        </form>
      </Box>
    </>
  );
};

export default Expenseform;
