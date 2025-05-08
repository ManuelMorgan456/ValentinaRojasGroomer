import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { HiComponent } from "../hi/hi.component";

@Component({
  selector: 'app-acerca',
  standalone: true,
  imports: [FooterComponent, HiComponent],
  templateUrl: './acerca.component.html',
  styleUrls: ['./acerca.component.css']
})
export class AcercaComponent {

}
