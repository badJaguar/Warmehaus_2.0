import gql from 'graphql-tag';

export const getFilmsQuery = {
  query: gql`
        query{
          floors{
          warmehausFloors{
            films{
                id
                name
                nominal
                price
            }
         }
      }
    }
`};
