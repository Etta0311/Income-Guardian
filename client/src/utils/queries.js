import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user {
    user {
      _id
      username
      email
      password
      expences {
        _id
        title
        transactionAmount
      }
    }
  }
`;