import { Component, OnInit } from '@angular/core';
import { category } from 'src/app/models/category';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  constructor(private user:UserService){}
  categories:category[]=[]
ngOnInit(): void {
     this.user.category().subscribe({
      next:(data)=>{
        this.categories=data as category[]
      },error:(err)=>{
        console.log(err);
      }
     })
}
}
