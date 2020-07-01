import React, { useEffect, useState, Fragment } from 'react';
import { Category } from '../Category';
import { List, Item } from './styles';
import Skeleton from 'react-loading-skeleton';



//Fetching de datos 
//Custom hook
function useCategoriesData() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  
  useEffect(function(){
    setLoading(true);
    window.fetch('https://petgram-server-caye-96c8a0wec.now.sh/categories')
    .then(res => res.json())
    .then(response => {
      setCategories(response);
    })
    .finally(() => {
      setLoading(false);
    })
  }, []);
  
  return { categories, loading};
}

const ListOfCategoriesComponent = () => {
  const { categories, loading } = useCategoriesData();
  const [showFixed, setShowFixed] = useState(false);


  
  const renderList = (fixed) => (
    <List fixed={fixed}>
      {
        loading ? 
        [1,2,3,4].map(id => (
          <Item key={id}> <Skeleton circle={true} height={75} width={75} /> </Item>
        ))
        
        :
        categories.map(category=> (
          <Item key={category.id}><Category  {...category} path={`/pet/${category.id}`}/></Item>
        ))
      }
    </List>
  );

  useEffect(function(){
    const onScroll = e => {
      const newShowFixed = window.scrollY > 200;
      showFixed != newShowFixed && setShowFixed(newShowFixed)
    }
    document.addEventListener('scroll', onScroll);

    return  () => document.removeEventListener('scroll', onScroll)
  }, [showFixed]);
  return (
    <Fragment>
    {renderList()}
    {showFixed && renderList(true)}
    </Fragment>
  );
  
}

export const  ListOfCategories = React.memo(ListOfCategoriesComponent);
