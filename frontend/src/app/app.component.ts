import { Component } from '@angular/core';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, RouterOutlet]
})
export class AppComponent {
  title = 'frontend';
}
