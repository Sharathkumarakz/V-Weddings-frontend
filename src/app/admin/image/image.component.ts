import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { category } from 'src/app/models/category';
import { User } from 'src/app/models/user';
import { AdminService } from 'src/app/service/admin.service';
import Swal from 'sweetalert2';

interface image {
  category: category,
  description: string,
  image: string,
  imagePublicId: string
  likes: User[]
  _id: string
}

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {

  constructor(private _adminService: AdminService, private _toastr: ToastrService) { }

  img: any = '';
  formn!: object
  imageData: image[] = []
  user!: string
  postId!: string
  description!: string
  selected!: string;
  likes!: User[]
  likedCount: number = 0
  showLikes: boolean = false

  //form configuration for form val

  imgForm = new FormGroup({
    image: new FormControl('', [Validators.required]),
    category: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required])
  });

  category: category[] = [];
  selectedFile: File | null = null;

  ngOnInit(): void {
    this._adminService.category().subscribe({
      next: (data) => {
        this.category = data as category[];
      },
      error: (err) => {
        console.log(err);
      }
    });
    this.getImages()
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
    } else {
      this.selectedFile = null;
    }
  }

  //form submission
  addImage() {
    if (!this.imgForm.value.category || this.imgForm.value.category == 'select category') {
      this._toastr.warning(' please select category', 'warning')
      return
    }

    if (this.imgForm.invalid) {
      return;
    } else {
      if (this.selectedFile) {
        const formData = new FormData();
        this.formn = {
          category: this.imgForm.value.category,
          description: this.imgForm.value.description
        }

        if (this.imgForm.value.category == 'select category ') {
          this._toastr.warning('select category', 'warning')
          return
        }
        formData.append('image', this.selectedFile, this.selectedFile.name);
        formData.append('textFieldName', JSON.stringify(this.formn));
        this._adminService.imgUpload(formData).subscribe({
          next: (response) => {
            this._toastr.success('upload success', 'Success')

          },
          error: (err) => {
            this._toastr.warning(err.error.message, 'warning')
          }
        });
      } else {
        console.warn('No file selected for upload.');
      }
    }
  }

  getImages() {
    this._adminService.getAllImages().subscribe({
      next: (data) => {
        this.imageData = data as image[]
      }, error: (err) => {
        console.log(err);
      }
    })
  }

  delete(id: string) {

    Swal.fire({
      title: 'Are you sure to delete?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this._adminService.deleteImage(id).subscribe({
          next: (data) => {
            Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            )
            this.getImages()
          },
          error: (err) => {
            this._toastr.warning(err.error.message, 'Warning')
          }
        })

      }
    })

  }

  //image selection
  selectImage(image: image) {
    this.selected = image.image
    this.postId = image._id
    this.description = image.description
    this.likes = image.likes
    this.likedCount = image.likes.length
  }
}
