import { Component } from '@angular/core';

@Component({
  selector: 'app-category-view',
  templateUrl: './category-view.component.html',
  styleUrls: ['./category-view.component.css']
})
export class CategoryViewComponent {


  images: string[] = [
    "https://p2.piqsels.com/preview/933/649/162/silhouette-man-guy-photographer-thumbnail.jpg",
    "https://dvyvvujm9h0uq.cloudfront.net/com/articles/1543483387-reinhart-julian-1145947-unsplash.jpg",
    "https://p2.piqsels.com/preview/933/649/162/silhouette-man-guy-photographer-thumbnail.jpg",
    "https://play-lh.googleusercontent.com/IeNJWoKYx1waOhfWF6TiuSiWBLfqLb18lmZYXSgsH1fvb8v1IYiZr5aYWe0Gxu-pVZX3",
    "https://p2.piqsels.com/preview/933/649/162/silhouette-man-guy-photographer-thumbnail.jpg",
    "https://dvyvvujm9h0uq.cloudfront.net/com/articles/1543483387-reinhart-julian-1145947-unsplash.jpg",
    "https://p2.piqsels.com/preview/933/649/162/silhouette-man-guy-photographer-thumbnail.jpg",
    "https://dvyvvujm9h0uq.cloudfront.net/com/articles/1543483387-reinhart-julian-1145947-unsplash.jpg",
    "https://p2.piqsels.com/preview/933/649/162/silhouette-man-guy-photographer-thumbnail.jpg",
    "https://dvyvvujm9h0uq.cloudfront.net/com/articles/1543483387-reinhart-julian-1145947-unsplash.jpg",
    "https://p2.piqsels.com/preview/933/649/162/silhouette-man-guy-photographer-thumbnail.jpg"
    // Add more image URLs here
  ];

  selected:string=this.images[0]
  like:boolean=false

  getImageSizeClass(index: number): string {
    if (index % 4 === 1) {
      return "size2";
    } else if (index % 4 === 2) {
      return "size3";
    } else {
      return "size1";
    }
  }


  //image selectio
  selectImage(image:string){
    this.selected=image
  }

  //image like
  likePost(){
  this.like= !this.like
  }


}
