import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { category } from 'src/app/models/category';
import { User } from 'src/app/models/user';
import { AdminService } from 'src/app/service/admin.service';



interface image {
  category: string,
  description: string,
  image: string,
  imagePublicId: string
  likes: User[]
  _id: string
}



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

  constructor(private _adminService: AdminService,private _router:Router,private _toastr:ToastrService) { }
  //------------------------------------------CATEGORY------------------------------------------
  //form configuration
  categoryForm=new FormGroup({
    category:new FormControl('',[Validators.required]),
    description:new FormControl('',[Validators.required])
  })
 category:category[]=[]

 ngOnInit(): void {
    this._adminService.category().subscribe({
      next:(data)=>{
      this.category = data as category[]
      },error:(err)=>{
        console.log(err); 
      }
    })
 }

  //form submission
  addCategory() {
    if (this.categoryForm.invalid) {
      return
    } else {
      this._adminService.addCategory(this.categoryForm.value).subscribe((data) => {
        this.category=data as category[]
      })
    }

  }


  delete(id:string) {
    this._adminService.deleteCategory(id).subscribe({
      next:(data) => {
      this.category=data as category[]
    },
    error:(err) => {
      this._toastr.warning(err.error.message,'Warning')
    }
   } )
  }


  viewIMages(id:string){
    this._router.navigate(['admin/images',id])
  }

 //----------------------------------------------------------------IMAGE------------------------------
 
 img: any = '';
 formn!:object
 //form configuration
 imgForm = new FormGroup({
   image: new FormControl('', [Validators.required]),
   category: new FormControl('', [Validators.required]),
   description: new FormControl('', [Validators.required])
 });

 selectedFile: File | null = null;


 onFileSelected(event: Event): void {
   const input = event.target as HTMLInputElement;
   if (input.files && input.files.length > 0) {
     this.selectedFile = input.files[0];
   } else {
     this.selectedFile = null;
   }
 }

 //form submission
 addImage() {
   if (this.imgForm.invalid) {
     return;
   } else {
     if (this.selectedFile) {
       const formData = new FormData();
        this.formn={
         category:this.imgForm.value.category,
         description:this.imgForm.value.description
       }
       formData.append('image', this.selectedFile, this.selectedFile.name);
       formData.append('textFieldName', JSON.stringify(this.formn));
       this._adminService.imgUpload(formData).subscribe({
         next:(response) => {
         },
         error:(error) => {
         }
     });
     } else {
       console.warn('No file selected for upload.');
     }
   }
 }

 ///--------------------------------------------------------CAT IMAGE--------------------------------------------------------

 
 param: string = ''
 categoryData: image[] = []
 user!: string
 postId!: string
 description!: string
 selected!: string;
 likes!: User[]
 likedCount:number=0
 showLikes:boolean = false
 getDetails(id:string): void {
  this.param=id
   this.getdata()
 }

 getdata() {
   this._adminService.getCategoryWiseImagesDetails(this.param).subscribe({
     next: (data) => {
       this.categoryData = data as image[]
     }, error: (err) => {
       console.log(err);
     }
   })
 }

 deleteImg(id: string) {
   this._adminService.deleteImage(id).subscribe({
     next: (data) => {
       this.getdata()
     },
     error: (err) => {
       this._toastr.warning(err.error.message, 'Warning')
     }
   })
 }

 //image selection
 selectImage(image: image) {
   this.selected = image.image
   this.postId = image._id
   this.description = image.description
   this.likes = image.likes
   this.likedCount=image.likes.length
 }
}
