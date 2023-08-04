import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { category } from 'src/app/models/category';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit{

  constructor(private _adminService: AdminService,private _router:Router) { }
  
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
        console.log(data);
        
        this.category=data as category[]
      })
    }

  }
}