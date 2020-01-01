# :zap::zap: rb-carosel :zap::zap:

A simple yet elegant carousel plugin for **Angular** .:smiling_imp:

## Installation and Usage

:point_right: **Step 1:** Install the plugin. 

```
npm i rb-carousel
```

:point_right: **Step 2:** Import the plugin into your module.

**app.module.ts** 

(:heavy_exclamation_mark:**Note:** Need not be *app.module.ts*, can be in any module that you intend to use the plugin)
```javascript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RbCarouselModule } from 'rb-carousel';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RbCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

```

:point_right: **Step 3:** Call the *rb-carousel* in you template

**app.component.html**

(:heavy_exclamation_mark:**Note:** Again need not be *app.component.html*, can be in any template that you intend to use the plugin)
```javascript

 <rb-carousel [dataSource]="imageArray" [carouselSettings]="carouselSettings"></rb-carousel>
 
 ```
 
 :point_right: **Step 4:** Pass the `dataSource` and `carouselSettings`
 
 :heavy_exclamation_mark:**Note:** Make sure you pass the `dataSource` with an *array of objects* with `imageUrl` key, as this acts as source to the images. The `CaptionText` is optional though.
 
 :heavy_exclamation_mark:**Note:** Also make sure you pass the `carouselSettings` . The details regarding the settings are give further below.
 
 
 ```javascript
 
 import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  imageArray = [
    { CaptionText: 'someText', imageUrl: 'https://someImage.jpg' },
    { CaptionText: 'someText', imageUrl: 'https://someImage.jpg' },
    { CaptionText: 'someText', imageUrl: 'https://someImage.jpg' }
  ];

  carouselSettings = {
    autoTransition: true,
    transitionDuration: 2000,
    animation: 'fade',
    displayImageCount: true,
    loopCarousel: true
  }
}
 
 ```

 :point_right: **Step 5:**  `Kidding !` , there is no step 5 :stuck_out_tongue_winking_eye: . Thats it you should be good to go. :triumph:

## Configuration

:heavy_exclamation_mark:**Lets look into** `carouselSettings`


Setting      | Value         | Purpose 
------------ | ------------- | ------------- 
autoTransition | boolean | enable / disable the auto transition of carousel.
transitionDuration | integer | Time between transitions, will be only used if `autoTransition` is `true`
animation | string | Select the animation for the slide transition. By default `fade`
displayImageCount | boolean | enable/disable the image count on the top left of image.
loopCarousel | boolean | Loop the carousel after reaching the end of slides.


## Animations

You can set the animation to your slide in the `carouselSettings` `animation` key.
Here are the list of inbuilt animations :
1. fade
2. flipDiagonal
3. rotateIn
4. rotateFromTop
5. rotateInDown
6. bounceOut
7. rotateSmallScale
8. flipOver
9. random

:heavy_exclamation_mark:**Note:** Setting `random` will randomly apply the animation to all the slides. 
:heart_eyes: Hee He! I know !! Cool right? :sunglasses:

:heavy_exclamation_mark: Don't like any of the inbuild animations. :disappointed: (you meanie :smirk:)
You can always add your own animation. As below:

Style.scss
```
.rotatecenter {
  animation: rotatecenterFrame 0.5s cubic-bezier(0.455, 0.030, 0.515, 0.955) both;
}

@-webkit-keyframes rotatecenterFrame {
    0% {
      -webkit-transform: rotateX(0);
              transform: rotateX(0);
    }
    100% {
      -webkit-transform: rotateX(-360deg);
              transform: rotateX(-360deg);
    }
  }
  @keyframes rotatecenterFrame {
    0% {
      -webkit-transform: rotateX(0);
              transform: rotateX(0);
    }
    100% {
      -webkit-transform: rotateX(-360deg);
              transform: rotateX(-360deg);
    }
  }

```

And pass the animation to the `carouselSettings`

```
 carouselSettings = {
   autoTransition: true,
   transitionDuration: 2000,
   animation: 'rotatecenter',
   displayImageCount: true,
   loopCarousel: true
 }
```

Yep! Totally customizable .:punch:

## Carousel Events

Here are a list of Events that the plugin is equipped with:

Event      | Returns         | Functionality 
------------ | ------------- | ------------- 
carouselEnd | boolean | When the carousel is at its last slide. Right time to fetch more data.
transitionStart | object | At the begining of slide transition. Returns the `image object` passed. 
transitionEnd | object | At the end of slide transition. Returns the `image object` passed. 
onNextSlide | object | When clicked on `next` button.
onPreviousSlide | object | When clicked on `prev` button.


Something like this:
```javascript
 <rb-carousel 
 [dataSource]="imageArray"
 [carouselSettings]="carouselSettings" 
 (carouselEnd)="corouselEvent($event)" 
 (transitionStart)="transitionStart($event)"
 (transitionEnd)="transitionEnd($event)"
 (onNextSlide)="onNextSlide($event)" 
 (onPreviousSlide)="onPreviousSlide($event)">
 </rb-carousel>
        
```

## Author

**Ravish Bhat**

## License

**MIT**




