import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { HiComponent } from "../hi/hi.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [FooterComponent, HiComponent, CommonModule],
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  slides = [
    {
      image: '../../../assets/h3.jpg',
      title: 'Bienestar Animal',
      description: 'Cuidado profesional y responsable'
    },
    {
      image: '../../../assets/distribuidores.jpg',
      title: 'Productos Naturales',
      description: 'Usamos solo ingredientes veganos'
    },
    {
      image: '../../../assets/BF.jpg',
      title: 'Amor por tu Mascota',
      description: 'Porque tu peludo merece lo mejor'
    }
  ];
}
