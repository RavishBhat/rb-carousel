import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'rb-carousel',
  template: `
   <rb-image-container [dataSource]="dataSource"
   [caroselSettings]="caroselSettings"
   (carouselEnd)="carouselEndEvent($event)"
   (transitionStart)="transitionBegan($event)"
   (transitionEnd)="transitionEnded($event)"
   (onNextSlide)="nextSlide($event)"
   (onPreviousSlide)="previousSlide($event)"
   ></rb-image-container>
  `,
  styles: []
})
export class  RbCarouselComponent implements OnInit {
  @Input() dataSource: Array<object>;
  @Input() caroselSettings: object;
  @Output() carouselEnd: EventEmitter<any> = new EventEmitter();
  @Output() transitionStart: EventEmitter<any> = new EventEmitter();
  @Output() transitionEnd: EventEmitter<any> = new EventEmitter();
  @Output() onNextSlide: EventEmitter<any> = new EventEmitter();
  @Output() onPreviousSlide: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  carouselEndEvent($event) {
    this.carouselEnd.emit($event);
  }

  transitionBegan($event) {
    this.transitionStart.emit($event);
  }

  transitionEnded($event) {
    this.transitionEnd.emit($event);
  }

  nextSlide($event) {
    this.onNextSlide.emit($event);
  }

  previousSlide($event) {
    this.onPreviousSlide.emit($event);
  }

}
