import { Component } from '@angular/core';;
import { FooterComponent } from "../footer/footer.component";
import { HiComponent } from "../hi/hi.component";

@Component({
  selector: 'app-contactame',
  standalone: true,
  imports: [FooterComponent, HiComponent],
  templateUrl: './contactame.component.html',
  styleUrls: ['./contactame.component.css']
})
export class ContactameComponent {

}
