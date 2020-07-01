import React from 'react';
import { PhotoCard, PhotoCardLoader } from '../PhotoCard';



 export const ListOfPhotoCardsComponent = ({data: {photos = [], loading = true}} = {}) => {
  return (
    <ul>
      {
        loading ? 
        [1,2,3].map(id => <PhotoCardLoader key={id} />)
        :
        photos.map(photo => <PhotoCard key={photo.id} {...photo} loading={loading} />)
      }
    </ul>
  );
}

