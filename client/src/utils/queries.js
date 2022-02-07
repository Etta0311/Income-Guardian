import { gql } from '@apollo/client';

export const QUERY_PROFILES = gql`
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
        date
      }
    }
  }
`;