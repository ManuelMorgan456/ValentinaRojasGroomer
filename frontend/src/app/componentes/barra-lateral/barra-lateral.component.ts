import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-barra-lateral',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './barra-lateral.component.html',
  styleUrls: ['./barra-lateral.component.css']
})

export class BarraLateralComponent {
  constructor(private router: Router) { }

  cerrarSesion() {
    // Aquí podrías limpiar el token del localStorage si lo usas
    localStorage.removeItem('token'); // opcional
    // Redirige al login
    this.router.navigate(['/login']);
  }
}
