import { Component, Inject, PLATFORM_ID, AfterViewInit } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
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
export class GaleriaComponent implements AfterViewInit {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const slider = document.getElementById('slider') as HTMLInputElement;
      const afterWrapper = document.getElementById('afterWrapper') as HTMLElement;

      if (slider && afterWrapper) {
        slider.addEventListener('input', () => {
          const value = parseInt(slider.value, 10);
          afterWrapper.style.width = `${value}%`;
        });

        afterWrapper.style.width = '50%'; // valor inicial
      }
    }
  }
}
