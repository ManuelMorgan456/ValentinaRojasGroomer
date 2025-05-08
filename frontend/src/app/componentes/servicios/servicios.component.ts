import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { HiComponent } from "../hi/hi.component";

@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [FooterComponent, HiComponent],
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent {

}
