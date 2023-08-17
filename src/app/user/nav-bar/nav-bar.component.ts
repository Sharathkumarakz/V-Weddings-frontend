import { Component, OnInit, OnDestroy} from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { user } from 'src/app/models/user';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs'; 

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit, OnDestroy {
  user!: user;
  name: string = 'Login';
  private subscription: Subscription | undefined;

  constructor(
    private _auth: AuthService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.subscription = this._auth.getUser().subscribe({
      next: (data) => {
        this.user = data as user;
        this.name = this.user.user.username;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  ngOnDestroy(): void {
     if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  logOut() {
    localStorage.removeItem('vweddings');
    this.name='Login'
     this._router.navigate(['/']);
  }
}
