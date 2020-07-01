// importaciones de apollo 
import { graphql } from 'react-apollo';
import { gql } from 'apollo-boost';


// permite envolver el componente
// componente de orden superior. Acepta un componente
// y retorna otro componente mejorado o con otros props

const GET_PHOTOS = gql`
query getPhotos($categoryId: ID) {
  photos(categoryId: $categoryId){
    id
    categoryId
    src
    likes
    liked
  }
}
`

export const withPhotos = graphql(GET_PHOTOS);
