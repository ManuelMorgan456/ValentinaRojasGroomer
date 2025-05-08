import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { HiComponent } from "../hi/hi.component";


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FooterComponent, HiComponent],
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
