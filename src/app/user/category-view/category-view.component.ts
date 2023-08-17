import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { category } from 'src/app/models/category';
import { mailverified } from 'src/app/models/mailVeification';
import { user } from 'src/app/models/user';
import { AuthService } from 'src/app/service/auth.service';
import { UserService } from 'src/app/service/user.service';

interface image{
category:string,
description:string,
image:string,
imagePublicId: string
likes:object[]
_id:string
}


interface Category{
  name:string,
  description:string,
  hide:Boolean
}

@Component({
  selector: 'app-category-view',
  templateUrl: './category-view.component.html',
  styleUrls: ['./category-view.component.css']
})
export class CategoryViewComponent  implements OnInit {
  categoryData:image[]=[]
  param!:string
  likes!:number
  user!:string
  postId!:string
  category!:Category[]
  viewLike:boolean=false
  description!:string
  constructor(
    private _activatedRoute:ActivatedRoute,
    private _userService:UserService,
    private _router:Router,
    private _auth:AuthService
    ){}
  ngOnInit(): void {
      this._activatedRoute.params.subscribe((data)=>{
        this.param=data['id']
      })
      
  this.getdata();
    this._auth.getUser().subscribe({
      next: (data) => {
        let dertails = data as user;
        this.user = dertails.user._id;
      },
      error: (err) => {
        console.log(err);
      },
    });

    this._userService.getCategory(this.param).subscribe({
      next:(data)=>{
         this.category=data as Category[] 
      },error:(err)=>{
         this._router.navigate(['/'])
        console.log(err);  
      }
    })
  }



  selected:string='https://cdn.dribbble.com/users/428895/screenshots/2383259/dribbble_2_shot.gif'
  like:boolean=false

  getImageSizeClass(index: number): string {
    if (index % 4 === 1) {
      return "size2";
    } else if (index % 4 === 2) {
      return "size3";
    } else {
      return "size1";
    }
  }


  //image selectio
  selectImage(image:image){
   this.selected=image.image
   this.likes=image.likes.length
   this.postId=image._id
   this.description=image.description
   this.viewLike=true
   if (image.likes.some(likedUser => likedUser.toString() == this.user)) {
    this.like = true;
  } else {
    this.like = false;
  }
  }

  getdata(){
    this._userService.getCategoryWiseImages(this.param).subscribe({
      next:(data)=>{
        this.categoryData=data as image[]
      },error:(err)=>{
         this._router.navigate(['/'])
        console.log(err);  
      }
    })
  }


  //image like
  likePost(id:string){
    if(this.like){
      this.likes-=1
    }else{
      this.likes+=1
    }
    this.like = !this.like
   this._userService.likePost(id).subscribe((data)=>{
     this.selectImage(data as image)
     this.getdata()
   })
  }

}
