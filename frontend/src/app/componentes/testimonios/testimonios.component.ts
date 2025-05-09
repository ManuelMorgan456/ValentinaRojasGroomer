import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-testimonios',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, FormsModule],
  templateUrl: './testimonios.component.html',
  styleUrls: ['./testimonios.component.css']
})
export class TestimoniosComponent {

  nombre: string = '';
  correo: string = '';
  mensaje: string = '';

  onSubmit(event: Event): void {
    event.preventDefault();
    console.log('Formulario enviado:', {
      nombre: this.nombre,
      correo: this.correo,
      mensaje: this.mensaje
    });

  }
}
