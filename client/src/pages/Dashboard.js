import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_USER } from "../utils/queries";
import Auth from "../utils/auth";

import ExpenseForm from "../components/addexpenseform";
import ExpenseRecord from "../components/expenserecord";

import { Box, Heading, Center, Container } from "@chakra-ui/react";

const Dashboard = () => {
  const { data } = useQuery(QUERY_USER);
  const checkLogIn = Auth.loggedIn();
  const Expense = data?.userById.expences || [];

  return (
    <>
      {checkLogIn ? (
        <Box h="900px">
          <Center>
            <Heading m={8}> Expense Record</Heading>
            {/* <Button colorScheme='blue' onClick="/expenserecord "> Add </Button> */}
          </Center>
          <Center>
            <ExpenseForm />
            <ExpenseRecord Expense= { Expense }/>
          </Center>
        </Box>
      ) : (
        <Container>Please login to view the details</Container>
      )}

    </>
  );
};
export default Dashboard;
