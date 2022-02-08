import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_USER } from "../utils/queries";
// import Auth from "../utils/auth";

import ExpenseForm from "../components/addexpenseform";
import ExpenseRecord from "../components/expenserecord";

import { Box, Heading, Center } from "@chakra-ui/react";

const Dashboard = () => {
  const data = useQuery(QUERY_USER);
  const Expense = data.data?.userById.expenses || [];
  const User = data.data?.userById;
  // const checkLogIn = Auth.loggedIn();

  return (
    <>
        <Box h="900px">
          <Center>
           {User && <Heading p={4}>Welcome back, {User.username}</Heading>}
            <Heading m={8}> Expense Record</Heading>
          </Center>
          <Center>
            <ExpenseForm />
            <ExpenseRecord Expense= { Expense }/>
          </Center>
        </Box>
     
      
    </>
  );
};
export default Dashboard;
