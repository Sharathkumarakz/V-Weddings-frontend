import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { mailverified } from 'src/app/models/mailVeification';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private _adminService: AdminService,private _router:Router) { }
  
  //form configuration
  loginForm=new FormGroup({
    email:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required])
  })

  //form submission
  login() {
    if (this.loginForm.invalid) {
      return
    } else {
      this._adminService.login(this.loginForm.value).subscribe((data) => {
        console.log(data);
        let token=data as mailverified
        localStorage.setItem('admin-V-Weddings',token.jwttoken);
        this._router.navigate(['/admin/dashboard'])
      })
    }

  }
}