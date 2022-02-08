import React from "react";
// import { useMutation } from "@apollo/client";
// import { DELETE_EXPENSE } from "../utils/mutation";
// import { QUERY_USER } from "../utils/queries";
import { Box, Center } from "@chakra-ui/react";
import { Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";

// Render record
const Recordlist = ({ user }) => {
  // const [updateExpense] = useMutation(UPDATE_EXPENSE, {
  //     refetchQueries: [QUERY_USER],
  //   });
  // const Updates = async (Id) => {
  //     try {
  //       const data = await updateExpense({
  //         variables: {
  //           id: Id,
  //         },
  //       });
  //     console.log(date);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };


//   const [removeExpense] = useMutation(DELETE_EXPENSE, {
//     refetchQueries: [{ query: QUERY_USER }],
//   });

  // Delete a record
//   const deleteone = async (recordId) => {
//     try {
//       await removeExpense({
//         variables: { _id: recordId },
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   if (!Expenses.length) {
//     return (
//       <Box>
//           <Center>
//               <Heading> No Expense Record</Heading>
//           </Center>
//       </Box>
//     );
//   }

  return (
    <Box m={12}>
        <Center>
        {/* {Expenses.map((Expense) => ( */}
      <Table size="lg" variant="striped" colorScheme="teal">
        <Thead>
          <Tr>
            <Th>Title</Th>
            <Th>Amount($)</Th>
          </Tr>
        </Thead>
        <Tbody>
          {/* <Tr>
            <Td>{Expense.title}</Td>
            <Td>{Expense.transactionAmount}</Td>
          </Tr> */}
          <Tr>
            <Td>ASOS</Td>
            <Td>80</Td>
          </Tr>
          <Tr>
            <Td>Coles</Td>
            <Td>52</Td>
          </Tr>
        </Tbody>
      </Table>
      </Center>
    </Box>
    
  );
};

export default Recordlist;
