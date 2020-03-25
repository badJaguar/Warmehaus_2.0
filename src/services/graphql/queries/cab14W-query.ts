import gql from 'graphql-tag';

export const getCab14WQuery = {
  query: gql`
    query{
        floors{
        warmehausFloors{
          cab14W{
              id
              name
              nominal
              price
          }
       }
     }
   }
`};
