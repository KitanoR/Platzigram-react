import React from 'react';

import { ListOfCategories } from '../components/ListOfCategories';
import { ListOfPhotoCards } from '../container/ListOfPhotoCards';

import { Layout } from '../components/Layout';



export const HomePage = ({ categoryId }) => {
    return (
        <Layout title={'Tu app de fotos de mascotas'} subtitle={'Con petgram puedes encontrar animales bonitos '}>
          <ListOfCategories  />
          <ListOfPhotoCards categoryId={categoryId} />
        </Layout>
    );
}

export const Home = React.memo(HomePage, (prevProps, props) => {
  return prevProps.categoryId === props.categoryId;
})