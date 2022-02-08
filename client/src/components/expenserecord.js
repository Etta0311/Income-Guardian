import React from "react";
import { useMutation } from "@apollo/client";
import { DELETE_EXPENCE } from "../utils/mutation";
import { QUERY_USER } from "../utils/queries";
import { Box, Center, Text, Image, Heading, Button } from "@chakra-ui/react";

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
    <Box px={4}>
      <Text p={4}>Your Posts</Text>
      {user && user.posts.length ? (
        user.posts.map((post) => (
          <Box
            minH="400"
            maxW="300"
            mb={4}
            borderColor="#1a535c"
            borderRadius={20}
            border="1px"
            p={4}
            key={post._id}
          >
            <Center>
              {post.image ? (
                <Image
                  pb={4}
                  maxH={200}
                  objectFit="cover"
                  borderRadius={10}
                  src={post.image}
                  alt="post feature"
                />
              ) : (
                <Image mb={4} src="./images/no-image.png" />
              )}
            </Center>
            <Heading h="50px" size="md">
              {post.title}
            </Heading>
            <Text mb={4}>
              {post.location}, {post.category.name}, {post.age}
            </Text>
            <Text mb={4}>{post.description}</Text>
            <Text fontSize="sm" fontStyle="italic" mb={4}>
              - {getDate(post.created_at / 1000)}
            </Text>
            <Center>
              <UpdatePost post={post} categories={categories} />
              <Button value={post._id} onClick={deletePost} mx={4} mt={4} p={4}>
                Delete
              </Button>
            </Center>
          </Box>
        ))
      ) : (
        <Box p={4}>
          <Text fontStyle="italic" p={4}>
            Create a new post today!
          </Text>
        </Box>
      )}
    </Box>
  );
};

export default Recordlist;