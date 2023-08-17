import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { mailverified } from 'src/app/models/mailVeification';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-mail-verification',
  templateUrl: './mail-verification.component.html',
  styleUrls: ['./mail-verification.component.css']
})
export class MailVerificationComponent implements OnInit {
  constructor(private _route: ActivatedRoute, private _auth: AuthService,private _routRouter:Router,private _toast:ToastrService) { }

  userId: string = ''
  token: string = ''
  ngOnInit(): void {
    this._route.params.subscribe((params) => {
      this.userId = params['id'];
      this.token = params['token'];
    })
  }

  verifyMail() {
    let verificationData = {
      userId: this.userId,
      token: this.token
    }
    this._auth.verifyMail(verificationData).subscribe(({
      next: (data ) => {
       let token=data as mailverified
        localStorage.setItem('vweddings',token.jwttoken);
        this._routRouter.navigate(['/'])
      }, error: (err) => {
     this._toast.warning(err.error.message,'warning')
      }
    }))
  }
}
