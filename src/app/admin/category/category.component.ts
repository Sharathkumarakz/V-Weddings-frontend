import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { category } from 'src/app/models/category';
import { AdminService } from 'src/app/service/admin.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit{

  constructor(private _adminService: AdminService,private _router:Router,private _toastr:ToastrService) { }
  
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
      this._adminService.addCategory(this.categoryForm.value).subscribe({
        next:(data) => {
                  this._toastr.success('Category added','Success')
        this.category= data as category[]

      },
      error:(err) => {
        this._toastr.warning(err.error.message, 'warning')

      }}
      )
    }

  }


  delete(id:string) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
         this._adminService.deleteCategory(id).subscribe({
          next:(data) => {
            Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            )
          this.category=data as category[]
        },
        error:(err) => {
          this._toastr.warning(err.error.message,'Warning')
        }
       } )
      }
    })
 
  }


  viewIMages(id:string){
    this._router.navigate(['admin/images',id])
  }
}