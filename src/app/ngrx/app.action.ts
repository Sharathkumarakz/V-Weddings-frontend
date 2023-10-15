import { createAction, props } from "@ngrx/store";
import { liked } from "../models/liked";

export const retrievelike=createAction('[profile API]API success',)
export const retrieveLikes=createAction('liked details',
props<{ likeDetails: liked }>()
)
