import { Component } from '@angular/core';
import { BarraLateralComponent } from '../barra-lateral/barra-lateral.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [BarraLateralComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

}
