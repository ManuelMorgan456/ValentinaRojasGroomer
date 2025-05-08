import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { HiComponent } from "../hi/hi.component";

@Component({
  selector: 'app-testimonios',
  standalone: true,
  imports: [FooterComponent, HiComponent],
  templateUrl: './testimonios.component.html',
  styleUrls: ['./testimonios.component.css']
})
export class TestimoniosComponent {

}
