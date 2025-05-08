import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { HiComponent } from "../hi/hi.component";

@Component({
  selector: 'app-peluqueria',
  standalone: true,
  imports: [FooterComponent, HiComponent],
  templateUrl: './peluqueria.component.html',
  styleUrls: ['./peluqueria.component.css']
})
export class PeluqueriaComponent {

}
