const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    expences: [Expence]
  }

  # input UserInput {
  #   username: String!
  #   email: String!
  #   password: String!
  #   confirmPW: String!
  # }

  type Expence {
    _id: ID!
    title: String!
    transactionAmount: Int!
    date: String!
  }

  input ExpenceInput {
    title: String
    transactionAmount: Int!
    date: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    user: User
  }

  type Mutation {
    signUp(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    updateUser(
      username: String!
      email: String!
      password: String!): User
    addExpence(data: ExpenceInput!): Expence!
    updateExpence(_id: ID!, data: ExpenceInput): Expence!
    deleteExpence(_id: ID!): Expence
  }

  }
`;
module.exports = typeDefs;
