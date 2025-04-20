import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'] // corregido
})
export class FooterComponent implements OnInit {

  ngOnInit(): void {
    if (typeof window !== 'undefined') {
      console.log(window.innerWidth);
    }
  }
}
