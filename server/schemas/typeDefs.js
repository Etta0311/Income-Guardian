const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
  }

  type Query {
    userById: User
    users: [User]
  }

  input UserInput {
    username: String!
    email: String!
    password: String!
    confirmPassword: String!
  }
  
  type Auth {
    token: ID!
    user: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    signUp(userInput: UserInput!): Auth
  }
`;
module.exports = typeDefs;
