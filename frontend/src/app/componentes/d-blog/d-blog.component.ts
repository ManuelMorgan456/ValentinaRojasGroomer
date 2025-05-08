import { Component } from '@angular/core';
import { BarraLateralComponent } from "../barra-lateral/barra-lateral.component";

@Component({
  selector: 'app-d-blog',
  standalone: true,
  templateUrl: './d-blog.component.html',
  styleUrls: ['./d-blog.component.css'],
  imports: [BarraLateralComponent]
})
export class DBlogComponent {

}
