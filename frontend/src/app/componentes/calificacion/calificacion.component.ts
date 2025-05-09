import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calificacion',
  imports: [CommonModule],
  templateUrl: './calificacion.component.html',
  styleUrl: './calificacion.component.css'
})
export class CalificacionComponent {
  stars = Array(5).fill(0);  
  rating = 0;

  setRating(value: number): void {
    this.rating = value;
    console.log(`Calificación seleccionada: ${this.rating}`);
    
  }

}
