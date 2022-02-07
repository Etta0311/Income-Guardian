const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    expences: [Expence]
  }

  type Expense {
    _id: ID!
    title: String!
    transactionAmount: Int!
    user: ID!
    created_at: String

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
    updateUser(username: String!, email: String!, password: String!): User

    addExpence(title: String!, transactionAmount: Int!): Expence
    updateExpence(_id: ID!, title: String!, transactionAmount: Int!): Expence
    deleteExpence(_id: ID!): Expence
  }

  }
`;
module.exports = typeDefs;
