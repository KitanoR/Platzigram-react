import React from 'react';
import { ListFavsWithQuery } from '../container/GetFavorites'; 
import { Layout } from '../components/Layout';

export default () => (
    <Layout title={'Tus favoritos'} subtitle={'Aquí puedes encontrar tus favoritos'}>
        <ListFavsWithQuery />
    </Layout>
)