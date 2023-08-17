import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-promo',
  templateUrl: './promo.component.html',
  styleUrls: ['./promo.component.css']
})
export class PromoComponent {
  subject!:string
  contactTxt!:string

  constructor(private _userService:UserService){}
  contact(){
     let content={
      subject:this.subject,
      txt:this.contactTxt
     }
     this._userService.sendMessage(content).subscribe({
      next:(data)=>{
        console.log(data);      
      },
      error:(err)=>{
        console.log(err);
        
      }
     })
  }


}
