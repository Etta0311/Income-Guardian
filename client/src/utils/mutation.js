import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
        email
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

export const ADD_EXPENSE = gql`
  mutation addExpense($title: String!, $transactionAmount: String!) {
    addExpense(title: $title, transactionAmount: $transactionAmount) {
      _id
      title
      transactionAmount
      user {
        _id
      }
      created_at
    }
  }
`;

export const UPDATE_EXPENSE = gql`
  mutation updateExpense(
    $_id: ID
    $title: String
    $transactionAmount: String
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
      created_at
    }
  }
`;

export const DELETE_EXPENSE = gql`
  mutation deleteExpense($_id: ID!) {
    deleteExpense(_id: $_id) {
      _id
    }
  }
`;