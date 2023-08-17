import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';
import { mailverified } from 'src/app/models/mailVeification';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private _auth: AuthService, private _router: Router, private toastr: ToastrService) { }

  //form configuration
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  })

  //form submission
  login() {
    if (this.loginForm.invalid) {
      return
    } else {
      this._auth.login(this.loginForm.value).subscribe({
        next: (data) => {
          let token = data as mailverified
          localStorage.setItem('vweddings', token.jwttoken);
          this._router.navigate(['/'])
        }, error: (err) => {
          this.toastr.warning(err.error.message, 'warning')
        }
      })
    }
  }

}