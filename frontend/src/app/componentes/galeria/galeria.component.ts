import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../footer/footer.component';
import { HiComponent } from "../hi/hi.component";

@Component({
  selector: 'app-galeria',
  standalone: true,
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css'],
  imports: [FooterComponent, CommonModule, HiComponent]
})
export class GaleriaComponent {

  @ViewChild('beforeImage', { static: true }) beforeImage!: ElementRef<HTMLImageElement>;
  @ViewChild('sliderLine', { static: true }) sliderLine!: ElementRef<HTMLDivElement>;
  @ViewChild('sliderIcon', { static: true }) sliderIcon!: ElementRef<HTMLDivElement>;

  onSliderInput(event: Event): void {
    const value = (event.target as HTMLInputElement).value + '%';

    const beforeImg = document.querySelector('.before-image') as HTMLElement;
    const sliderLine = document.querySelector('.slider-line') as HTMLElement;
    const sliderIcon = document.querySelector('.slider-icon') as HTMLElement;

    beforeImg.style.width = value;
    sliderLine.style.left = value;
    sliderIcon.style.left = value;
  }

}
