const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    expences: [Expence]
  }

  type Expence {
    _id: ID!
    title: String!
    status: ExpenceType!
    transactionAmount: Int!
    date: String!
  }

  input UserInput {
    username: String!
    email: String!
    password: String!
    confirmPW: String!
  }

  type Auth {
    token: ID!
    user: User
  }

  input CreateExpenceInput {
    title: String!
    status: ExpenceType!
    transactionAmount: Int!
    date: String!
  }

  input UpdateExpenceInput {
    title: String
    status: ExpenceType
    transactionAmount: Int
    date: String
  }

  type Query {
    userById: User
    users: [User]
  }

  type Mutation {
    signUp(userInput: UserInput!): Auth
    login(username: String!, password: String!): Auth

    createExpence(data: CreateExpenceInput!): Expence!
    deleteExpence(_id: ID!): Expence
    updateExpence(_id: ID!, data: UpdateExpenceInput): Expence!
  }

  }
`;
module.exports = typeDefs;
