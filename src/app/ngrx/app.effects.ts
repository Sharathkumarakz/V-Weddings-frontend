import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { retrieveLikes, retrievelike } from "./app.action";
import { map, switchMap } from "rxjs";
import { UserService } from "../service/user.service";
import { liked } from "../models/liked";

@Injectable()
export class appEffects{
    constructor(private actions$:Actions,private userService:UserService){}
    loadEdits$=createEffect(()=>
    this.actions$.pipe(
     ofType(retrievelike),
     switchMap(()=>{
        return this.userService.likedImages()
        .pipe(map((data)=>retrieveLikes({likeDetails:data as liked})
      ))
     })
    )
    )
}