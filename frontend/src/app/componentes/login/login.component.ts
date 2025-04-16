import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FooterComponent, HeaderComponent],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  isRegisterActive: boolean = false;

  showRegister(): void {
    this.isRegisterActive = true;
  }

  showLogin(): void {
    this.isRegisterActive = false;
  }

}
