import { Component, OnInit, Input, AfterViewInit, Renderer, Renderer2, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'rb-image-container',
  templateUrl: './rb-image-container.component.html',
  styleUrls: ['./rb-image-container.component.scss']
})
export class RbImageContainerComponent implements OnInit, AfterViewInit {
  slideIndex = 1;
  @Input() dataSource: Array<object>;
  @Input() carouselSettings: any;
  @Output() carouselEnd: EventEmitter<any> = new EventEmitter();
  @Output() transitionStart: EventEmitter<any> = new EventEmitter();
  @Output() transitionEnd: EventEmitter<any> = new EventEmitter();
  @Output() onNextSlide: EventEmitter<any> = new EventEmitter();
  @Output() onPreviousSlide: EventEmitter<any> = new EventEmitter();
  timeOut: any;
  animeList = ['fade', 'flipDiagonal', 'rotateIn', 'rotateFromTop', 'rotateInDown', 'bounceOut', 'rotateSmallScale', 'flipOver'];
  constructor(private renderer: Renderer2,
    private elem: ElementRef) { }

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.showSlides(this.slideIndex, this.dataSource[0]);
    this.bindAnimation();
  }

  bindAnimation() {
    var slides = this.elem.nativeElement.querySelectorAll('.carouselSlides');

    slides.forEach((ele: HTMLElement) => {
      if (this.carouselSettings.animation) {
        if (this.carouselSettings.animation.toLowerCase() == 'random') {
          let animeClass = this.getRandomAnimeClass();
          ele.classList.add(animeClass);
        } else {
          ele.classList.add(this.carouselSettings.animation);
        }
      } else {
        ele.classList.add('fade');
      }

    });
  }

  getRandomAnimeClass() {
    let num = Math.floor((Math.random() * (this.animeList.length + 1)) + 1) - 1;
    return this.animeList[num];
  }

  plusSlides(n, data) {
    if (this.carouselSettings) {
      if (this.carouselSettings.autoTransition) {
        clearTimeout(this.timeOut);
      }
    }
    if (n > 0) {
      this.onNextSlide.emit(data);
    } else {
      this.onPreviousSlide.emit(data);
    }
    if (n - 1 !== this.dataSource.length || this.carouselSettings.loopCarousel) {
      this.showSlides(this.slideIndex += n, data);
    }

  }

  currentSlide(n, data) {
    if (this.carouselSettings) {
      if (this.carouselSettings.autoTransition) {
        clearTimeout(this.timeOut);
      }
    }
    this.showSlides(this.slideIndex = n, data);
  }

  showSlides(n, data) {
    var i;
    this.transitionStart.emit(data);
    if (this.dataSource.length === this.slideIndex) {
      this.carouselEnd.emit(true);
    }
    var slides = this.elem.nativeElement.querySelectorAll('.carouselSlides');
    var dots = this.elem.nativeElement.querySelectorAll(".dot");
    if (n > slides.length) { this.slideIndex = 1 }
    if (n < 1) { this.slideIndex = slides.length }
    slides.forEach((ele: HTMLElement) => {
      ele.style.display = "none";
    });
    dots.forEach((ele: HTMLElement)=>{
      ele.classList.add('active');
    });
    slides[this.slideIndex - 1].style.display = "block";
    dots[this.slideIndex - 1].className += " active";
    if (this.carouselSettings) {
      if (this.carouselSettings.autoTransition) {
        this.timeOut = setTimeout(() => {
          this.slideIndex++;
          this.showSlides(this.slideIndex, this.dataSource[this.slideIndex - 1]);
        }, this.carouselSettings.transitionDuration);
      }
    }
    this.transitionEnd.emit(data);
  }
}
