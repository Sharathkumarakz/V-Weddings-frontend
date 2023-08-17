import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { category } from 'src/app/models/category';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  constructor(private _user:UserService,private _router:Router){}
  categories:category[]=[]
ngOnInit(): void {
     this._user.category().subscribe({
      next:(data)=>{
        this.categories=data as category[]
      },error:(err)=>{
        console.log(err);
      }
     })
}

navigateTo(id:string){
this._router.navigate(['/category/'+id]);
}


}
