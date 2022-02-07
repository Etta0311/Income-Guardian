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
  mutation addExpence($data: ExpenceInput) {
    addExpence(data: $ExpenceInput) {
      _id
      title
      transactionAmount
      date
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