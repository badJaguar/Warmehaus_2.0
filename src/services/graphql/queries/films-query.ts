import gql from 'graphql-tag';

export const getFilmsQuery = {
  query: gql`
query{
  floors{
     films{
        name
        nominal
        price
        }
      }
    }
`};
