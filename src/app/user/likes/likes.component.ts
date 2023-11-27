import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { Store, select } from '@ngrx/store';
import {retrievelike } from 'src/app/ngrx/app.action';
import { likedData } from 'src/app/ngrx/app.selector';
import { liked } from 'src/app/models/liked';

@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.css']
})
export class LikesComponent implements OnInit{
  likes:liked[]=[]
  categoryData:liked[]=[]
  param!:string
  user!:string
  postId!:string
  viewLike:boolean=true
  description!:string
  selected!: string;
  like:boolean=true

   constructor(
    private _userService:UserService,
    private _store: Store<{likedetails:liked}>
    ){}
    let$=this._store.pipe(select(likedData)).subscribe((liked) => {
      this.likes=liked as any;
    });
    
  ngOnInit(): void {
     this.getdata()
  }

  getdata(){
    if(!Array.isArray(this.likes)){
      this._store.dispatch(retrievelike())
    }
  }


    //image selectio
    selectImage(image:liked){
      this.selected=image.image
      this.postId=image._id
      this.description=image.description
      this.viewLike=true
      this.like=true
     }
   

     //image like
  likePost(id:string){
    this.like = !this.like
   this._userService.likePost(id).subscribe((data)=>{
   })
  }
}
