import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query userById {
    userById {
      _id
      username
      email
      password
      expenses {
        _id
        title
        transactionAmount
        created_at
      }
    }
  }
`;