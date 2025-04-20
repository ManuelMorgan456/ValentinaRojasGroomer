import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-peluqueria',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './peluqueria.component.html',
  styleUrls: ['./peluqueria.component.css']
})
export class PeluqueriaComponent {

}
