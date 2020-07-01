import React from 'react';
import { ImgWrapper, Img, Button, Article } from './styles';
import { useLocalStore } from '../../hooks/useLocalStorage';
import { useNearScreen } from '../../hooks/useNearScrean';

import { FavButton, FavButtonSkeleton } from '../FavButton';
import { ToogleLikeMutation } from '../../container/ToggleLikeMutation';
import PropTypes from 'prop-types';
import { Link } from '@reach/router';

import Skeleton from "react-loading-skeleton";

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60';





export const PhotoCard = ({id, likes = 0, liked, src = DEFAULT_IMAGE}) => {
  const [ show, element ] = useNearScreen();
  // const key = `like-${id}`;
  // const [ liked, setLiked ] = useLocalStore(key, false);

  const handleFavClick = () => setLiked(!liked)

  return (
    <Article ref={element}>
      {
        show && <>
          <Link to={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </Link>
          <ToogleLikeMutation>
            {
              (toggleLike) => {
                const handleFavClick = () => {
                  toggleLike({variables: {
                    input: {id}
                  }});
                }
                return <FavButton 
                    liked={liked}
                    likes={likes}
                    onClick={handleFavClick}
                  />
              }
            }
          </ToogleLikeMutation>
          
        </>
      }
      
    </Article>
  );
}

export const PhotoCardLoader = () => {
  return (
    
    <Article>
          <Skeleton  height={200}/> 
          <FavButtonSkeleton />
    </Article>
  )
}


PhotoCard.propTypes = {
  id: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  src: PropTypes.string.isRequired,
  likes: function(props, propName, componentName) {
    const propValue = props[propName];
    if(propValue === undefined){
      return new Error(`${propName} value must be defined`);
    }
    if(propValue < 0){
      return new Error(`${propName} value must be greater than 0`);
    }
  }
}