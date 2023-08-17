import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';


interface image{
  category:string,
  description:string,
  image:string,
  imagePublicId: string
  likes:object[]
  _id:string
  }
  
@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.css']
})
export class LikesComponent implements OnInit{
  likes:image[]=[]
  categoryData:image[]=[]
  param!:string
  user!:string
  postId!:string
  viewLike:boolean=true
  description!:string
  selected!: string;
  like:boolean=true
   constructor(private _userService:UserService){}
  ngOnInit(): void {
  

     this.getdata()

  }
  getdata(){
    this._userService.likedImages().subscribe({
      next:(data)=>{
        console.log(data);     
  this.likes=data as image[]
      },error:(err)=>{
        console.log(err);  
      }
     })
  }


    //image selectio
    selectImage(image:image){
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
