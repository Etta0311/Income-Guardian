import React from "react";
import { useMutation } from "@apollo/client";
import { DELETE_EXPENCE } from "../utils/mutation";
import { QUERY_USER } from "../utils/queries";
import { Box, Center, Text, Image, Heading, Button } from "@chakra-ui/react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
} from "@chakra-ui/react";
// import UpdatePost from "./modals/ModalUpdatePost";

// Render record
const Recordlist = ({ title, transactionAmount }) => {
  const [removeExpense] = useMutation(DELETE_EXPENCE, {
    refetchQueries: [{ query: QUERY_USER }],
  });

  // Delete a record
  const deleteone = async (recordId) => {
    try {
      await removeExpense({
        variables: { _id: recordId },
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box m={12}>
      <Table size="lg" variant="striped" colorScheme="teal">
        <Thead>
          <Tr>
            <Th>Title</Th>
            <Th>Amount($)</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>ASOS</Td>
            <Td>100</Td>
          </Tr>
          <Tr>
            <Td>Coles</Td>
            <Td>52</Td>
          </Tr>
        </Tbody>
      </Table>
    </Box>
  );
};

export default Recordlist;
