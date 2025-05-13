import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../footer/footer.component';
import { HiComponent } from "../hi/hi.component";
import { SliderComponent } from '../slider/slider.component';

@Component({
  selector: 'app-galeria',
  standalone: true,
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css'],
  imports: [FooterComponent, CommonModule, HiComponent, SliderComponent]
})
export class GaleriaComponent {


}
