import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query userById {
    userById {
      _id
      username
      email
      password
      expences {
        _id
        title
        transactionAmount
        user
        created_at
      }
    }
  }
`;