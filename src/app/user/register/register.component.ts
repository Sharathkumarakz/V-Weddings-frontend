import { Component } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';
import { ToastrService } from 'ngx-toastr';
interface register{
  message: string
}
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
   
constructor(private _auth:AuthService,private _toastr:ToastrService){}

  //form configuration
  registerForm=new FormGroup({
    username:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required]),
    email:new FormControl('',[Validators.required,Validators.email]),
    phone:new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(12)])
  })

  
//mail validation
validateEmail = (email: string) => {
  var validRegex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (email.match(validRegex)) {
    return true;
  } else {
    return false;
  }
}
  //form submission
  register(){
if(this.registerForm.invalid){
  return
}else{
  let data = this.registerForm.getRawValue()
  if (!/[a-zA-Z]/.test(data.username as string) || data.username=='' || /^\s*$/.test(data.password as string) || /^\s*$/.test(data.phone as string)) {
    this._toastr.warning('All fields are needed', 'warning')
  } else if (!this.validateEmail(data.email as string)) {
    this._toastr.warning('Please enter a valid email', 'warning')
  } else{

  
this._auth.register(this.registerForm.value).subscribe({
  next:(data)=>{
    let register = data as register
   this._toastr.success(register.message, 'Success') 
},error: (err) => {
  this._toastr.warning(err.error.message, 'warning')
}})
}

  }
}
}
