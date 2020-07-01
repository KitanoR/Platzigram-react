import React from 'react';
import { PhotoCard, PhotoCardLoader } from '../components/PhotoCard';

// importaciones de graph ql
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';


const GET_SINGLE_PHOTO = gql`
  query getSinglePhoto($id: ID!){
    photo(id:$id){
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }

`;


const renderProps = ({loading, error, data}) =>  {
  if(loading) return <PhotoCardLoader />
  if(error) return <p>Ha ocurrido un error</p>
  const { photo = {} } = data;
  return <PhotoCard  {...photo}/>
}




export const PhotoCardWithQuery = ({id}) => (
  <Query query={GET_SINGLE_PHOTO} variables={{id}}>
      { renderProps }
        
  </Query>
)
