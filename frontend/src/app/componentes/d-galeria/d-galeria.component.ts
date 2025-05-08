import { Component } from '@angular/core';
import { BarraLateralComponent } from "../barra-lateral/barra-lateral.component";

@Component({
  selector: 'app-d-galeria',
  standalone: true,
  templateUrl: './d-galeria.component.html',
  styleUrls: ['./d-galeria.component.css'],
  imports: [BarraLateralComponent]
})
export class DGaleriaComponent {

}
