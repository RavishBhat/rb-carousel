import { NgModule } from '@angular/core';
import { RbCarouselComponent } from './rb-carousel.component';
import { RbImageContainerComponent  } from './rb-image-container/rb-image-container.component';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [RbCarouselComponent, RbImageContainerComponent],
  imports: [
    BrowserModule
  ],
  exports: [RbCarouselComponent]
})
export class RbCarouselModule { }
