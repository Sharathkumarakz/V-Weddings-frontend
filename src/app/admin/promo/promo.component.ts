import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user';
import { AdminService } from 'src/app/service/admin.service';


interface image {
  category: string,
  description: string,
  image: string,
  imagePublicId: string
  likes: User[]
  _id: string
}

@Component({
  selector: 'app-promo',
  templateUrl: './promo.component.html',
  styleUrls: ['./promo.component.css']
})
export class PromoComponent implements OnInit {
  constructor(private _adminService: AdminService, private _activatedRoute: ActivatedRoute, private _toastr: ToastrService) { }

  param: string = ''
  categoryData: image[] = []
  user!: string
  postId!: string
  description!: string
  selected!: string;
  likes!: User[]
  likedCount:number=0
  showLikes:boolean = false
  ngOnInit(): void {
    this._activatedRoute.params.subscribe((data) => {
      this.param = data['id']
    })
    this.getdata()
  }

  getdata() {
    this._adminService.getCategoryWiseImagesDetails(this.param).subscribe({
      next: (data) => {
        this.categoryData = data as image[]
      }, error: (err) => {
        console.log(err);
      }
    })
  }

  delete(id: string) {
    this._adminService.deleteImage(id).subscribe({
      next: (data) => {
        this.getdata()
      },
      error: (err) => {
        this._toastr.warning(err.error.message, 'Warning')
      }
    })
  }

  //image selection
  selectImage(image: image) {
    this.selected = image.image
    this.postId = image._id
    this.description = image.description
    this.likes = image.likes
    this.likedCount=image.likes.length
  }
}
