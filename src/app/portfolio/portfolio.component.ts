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

  SrcImag(img:any){
    this.selectedImage = img.src;
   // console.log(this.selectedImage );
    this.isLayerVisible=true;  
  }

// SrcImag(e:Event){
//   this.selectedImage = (e.target as HTMLImageElement).src;
//  // console.log(this.selectedImage );
//   this.isLayerVisible=true;  
// }
hideLayer(e:Event,image:HTMLImageElement){

  console.log("2222222")
  console.log(e.target)
  console.log(image)
e.target == image?null: this.isLayerVisible=false;

//(e.target as HTMLImageElement).src == this.selectedImage?null: this.isLayerVisible=false;
}


}
