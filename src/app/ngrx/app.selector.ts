import {createSelector} from '@ngrx/store'
import { liked } from '../models/liked';
import { appLiked } from './app.state';

export const likedData = createSelector(
    (state: appLiked) => state.likedetails,
    (likeDetails: liked) => likeDetails
  );

