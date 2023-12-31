import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.component.html',
  styleUrls: ['./slides.component.scss']
})
export class SlidesComponent implements OnInit{
  @Input() slides: any = [];

  public list = [
    {},
    {},
    {}
  ]

  ngOnInit(): void {
    
  }
  currentIndex: number = 0;
  goToNext() {
    console.log('inja');
    const isLastSlide = this.currentIndex === this.slides.length - 1;
    const newIndex = isLastSlide ? 0 : this.currentIndex + 1;
    this.currentIndex = newIndex
  }

  goToPrevious() {
    const isFirstSlide = this.currentIndex === 0;
    const newIndex = isFirstSlide ? this.slides.length - 1 : this.currentIndex - 1;
    this.currentIndex = newIndex;
  }

  gotoSlide(slideIndex: number) {
    console.log('ddd',slideIndex);   
    this.currentIndex = slideIndex;
  }


}
