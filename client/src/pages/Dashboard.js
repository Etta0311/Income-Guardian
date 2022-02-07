import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_EXPENSE } from '../utils/queries';

import ExpenseForm from "../components/addexpenseform";
import ExpenseRecord from "../components/expenserecord";

// import { Box, Heading, Center, Wrap } from "@chakra-ui/react";

const Dashboard = () => {
  const { loading, data } = useQuery(QUERY_EXPENSE);
  const Expense = data?.thoughts || [];

  return (
//     <>
//       <Center>
//         {user && <Heading p={4}>Welcome back, {user.firstName}</Heading>}
//       </Center>
//       {/* <Center> */}
//       <Box>
//         <Wrap justify="center">
//           <PostForm categories={categories} />
//           {user && <UserPosts user={user} categories={categories} />}
//         </Wrap>
//       </Box>
//       {/* </Center> */}
//     </>
//   );
};

export default Dashboard;