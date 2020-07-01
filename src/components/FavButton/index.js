import React from 'react';
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { Button } from './styles';
import Skeleton from "react-loading-skeleton";
import PropTypes from 'prop-types';



export const FavButton = ({liked, likes, onClick}) => {
  const Icon = liked ? MdFavorite : MdFavoriteBorder;

  return (
    <Button onClick={onClick}>
      <Icon size={'32px'}/> {likes} likes!
    </Button>
  );
  
}

export const FavButtonSkeleton = () => (
  <Button >
    <Skeleton  width={150}/> 
  </Button>
)

FavButton.propTypes = {
  liked: PropTypes.bool.isRequired,
  likes: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired
}
