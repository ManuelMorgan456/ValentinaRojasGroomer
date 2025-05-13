import { Component, Input, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [],
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {
  @ViewChild('beforeImg', { static: true }) beforeImg!: ElementRef<HTMLElement>;
  @ViewChild('sliderLine', { static: true }) sliderLine!: ElementRef<HTMLElement>;
  @ViewChild('sliderIcon', { static: true }) sliderIcon!: ElementRef<HTMLElement>;

  @Input() beforeImageSrc: string = '';
  @Input() afterImageSrc: string = '';

  onSliderInput(event: Event): void {
    const value = (event.target as HTMLInputElement).value + '%';
    this.beforeImg.nativeElement.style.width = value;
    this.sliderLine.nativeElement.style.left = value;
    this.sliderIcon.nativeElement.style.left = value;
  }
} 
