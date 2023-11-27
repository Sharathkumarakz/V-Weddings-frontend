import { createReducer, on } from '@ngrx/store';
import {retrieveLikes} from '../ngrx/app.action'
import { liked } from '../models/liked';

export const likeReducer = createReducer<liked | undefined>(
    undefined,
    on(retrieveLikes,(state,{likeDetails})=>{     
        return likeDetails;
    })
)
