import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  constructor(private _router:Router){}
  logout(){
      localStorage.removeItem('admin-V-Weddings');
       this._router.navigate(['/admin']);
    }
  }

