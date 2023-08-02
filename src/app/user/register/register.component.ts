import { Component } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
   
constructor(private _auth:AuthService){}

  //form configuration
  registerForm=new FormGroup({
    username:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required]),
    email:new FormControl('',[Validators.required,Validators.email]),
    phone:new FormControl('',[Validators.required,Validators.minLength(10)])
  })

  //form submission
  register(){
if(this.registerForm.invalid){
  return
}else{
this._auth.register(this.registerForm.value).subscribe((data)=>{
  console.log(data); 
})
}

  }
}
