// los containers se utilizan para hacer 
// el fetching de datos

import { withPhotos } from '../hoc/withPhotos';
import { ListOfPhotoCardsComponent } from '../components/ListOfPhotoCard'
export const ListOfPhotoCards = withPhotos(ListOfPhotoCardsComponent);
