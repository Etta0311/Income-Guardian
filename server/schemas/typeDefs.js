const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    expenses: [Expense]
  }

  type Expense {
    _id: ID!
    title: String!
    transactionAmount: String!
    user: User
    created_at: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    userById: User

  }

  type Mutation {
    signUp(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth

    addExpense(title: String!, transactionAmount: String!): Expense
    updateExpense(_id: ID, title: String, transactionAmount: String): Expense
    deleteExpense(_id: ID!): Expense
  }
`;
module.exports = typeDefs;
