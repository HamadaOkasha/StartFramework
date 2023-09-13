import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  
  isLayerVisible: boolean = false;
  selectedImage: string = "";
  imagesUrl = [
    './../../assets/images/poert1.png',
    './../../assets/images/port2.png',
    './../../assets/images/port3.png',
    './../../assets/images/port2.png',
    './../../assets/images/poert1.png',
    './../../assets/images/port2.png',
  ];

  SrcImag(e:Event){
    this.selectedImage = (e.target as HTMLImageElement).src;
    console.log(this.selectedImage );
    this.isLayerVisible=true;  
  }
hideLayer(e:Event){
//console.log(e.target)
(e.target as HTMLImageElement).src == this.selectedImage?null: this.isLayerVisible=false;
  //e.target===img?null: this.isLayerVisible=false;  

}
//  toggleLayer(imageUrl: string) {,img:HTMLImageElement
//    this.selectedImage = imageUrl;
//    this.isLayerVisible = true;
//  }

// hideLayer() {
//   this.isLayerVisible = false;
//  // this.selectedImage = null;
// }

}