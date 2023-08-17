import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { AdminService } from 'src/app/service/admin.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  constructor(private _adminService: AdminService) { }

  usersData:User[]=[]
  ngOnInit(): void {
  this.getUsers()
  }
getUsers() {
  this._adminService.getUsers().subscribe({
    next:(data)=>{
      this.usersData = data as User[]
      console.log(this.usersData);
      
    },
    error:(err)=>{
      console.log(err);
      
    }
  })
}
  block(id:string){
    Swal.fire({
      title: 'Are you sure to unblock?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, unblock it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this._adminService.blockUser(id).subscribe({
          next:(data)=>{
            Swal.fire(
              'Deleted!',
              'Your user has been unblocked.',
              'success'
            )
    this.getUsers() 
          },
          error:(err)=>{
            console.log(err);
            
          }
        })
    
      }
    })

  }

  unBlock(id:string){
    Swal.fire({
      title: 'Are you sure to block?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, block it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this._adminService.unblockUser(id).subscribe({
          next:(data)=>{
            Swal.fire(
              'Deleted!',
              'Your user has been blocked',
              'success'
            )
    this.getUsers() 
          },
          error:(err)=>{
            console.log(err);
            
          }
        })
   
      }
    })

  }
}
