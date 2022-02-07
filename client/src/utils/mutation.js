import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const SIGNUP = gql`
  mutation signUp($username: String!, $email: String!, $password: String!) {
    signUp(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;

export const ADD_EXPENCE = gql`
  mutation addExpence($title: String!, $transactionAmount: Int!, $user: ID!) {
    addExpence(title: $title, transactionAmount: $transactionAmount, user: $user) {
      _id
      title
      transactionAmount
      user {
        _id
      }
    }
  }
`;

export const UPDATE_EXPENSE = gql`
  mutation updateExpense(
    $_id: ID!
    $title: String!
    $transactionAmount: Int!
  ) {
    updateExpense(
      _id: $_id
      title: $title
      transactionAmount: $transactionAmount
    ) {
      _id
      title
      transactionAmount
      user {
        _id
      }
    }
  }
`;

export const DELETE_EXPENCE = gql`
  mutation deleteExpence($_Id: ID!) {
    deleteExpence(_id: $_Id) {
      _id
    }
  }
`;