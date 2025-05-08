import { Component } from '@angular/core';
import { BarraLateralComponent } from "../barra-lateral/barra-lateral.component";

@Component({
  selector: 'app-d-productos',
  standalone: true,
  templateUrl: './d-productos.component.html',
  styleUrls: ['./d-productos.component.css'],
  imports: [BarraLateralComponent]
})
export class DProductosComponent {

}
