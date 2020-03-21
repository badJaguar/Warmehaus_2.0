import gql from 'graphql-tag';

export const getCab14WQuery = {
  query: gql`
query{
  cab14W{
    id
    name
    nominal
    price
  }
}
`};
