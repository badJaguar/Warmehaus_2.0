import gql from 'graphql-tag';

export const filmsQuery = {
  query: gql`
query{
  items{
    id
    name
    nominal
    price
  }
}
`}