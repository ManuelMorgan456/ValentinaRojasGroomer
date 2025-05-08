import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { HiComponent } from "../hi/hi.component";

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [FooterComponent, HiComponent],
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {

}
