import gql from 'graphql-tag';

export const getFilmsQuery = {
  query: gql`
query{
  films{
    id
    name
    nominal
    price
  }
}
`};
