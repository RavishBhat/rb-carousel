import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'carosel';
  imageArray= [
    {CaptionText:'rrbi',imageUrl:'https://ravishimages.s3.ap-south-1.amazonaws.com/myImages/IMG20180714090141.jpg'},
    {CaptionText:'super',imageUrl:'https://ravishimages.s3.ap-south-1.amazonaws.com/myImages/IMG20180914095217.jpg'},  
    {CaptionText:'awesom',imageUrl:'https://ravishimages.s3.ap-south-1.amazonaws.com/myImages/IMG20180930135227.jpg'}
    
  ];

  caroselSettings = {
    autoTransition: false,
    transitionDuration:2000,
    animation:'random',
    displayImageCount: true,
    loopCarousel: false

  }

  corouselEvent(data){

    if(data) {
      let obj= {CaptionText:'phot0',imageUrl:'https://images3.alphacoders.com/595/595064.jpg'};
     // this.imageArray.push(obj);
    }
  }

  transitionStart(data) {
    console.log('transitionStart',data);
  }

  transitionEnd(data) {
    console.log('transitionEnd',data);
  }

  onNextSlide(data) {
    console.log('NextSlide',data);
  }

  onPreviousSlide(data) {
    console.log('PreviousSlide',data);
  }
}
