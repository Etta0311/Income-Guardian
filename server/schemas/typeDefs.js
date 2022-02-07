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
    transactionAmount: Int!
    user: User
    created_at: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    user: User
    expensesRecord(username: String): [Expense]
  }

  type Mutation {
    signUp(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    updateUser(username: String!, email: String!, password: String!): User

    addExpense(title: String!, transactionAmount: Int!, user: ID!): Expense
    updateExpense(_id: ID!, title: String!, transactionAmount: Int!): Expense
    deleteExpense(_id: ID!): Expense
  }
`;
module.exports = typeDefs;
