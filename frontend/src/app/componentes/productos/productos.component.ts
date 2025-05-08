import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';
import { HiComponent } from "../hi/hi.component";


@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule, FooterComponent, HiComponent],
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {

}
