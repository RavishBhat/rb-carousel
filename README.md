# :zap::zap: rb-carosel :zap::zap:

A simple yet elegant carousel plugin for **Angular** .:smiling_imp:

## Installation

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

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
