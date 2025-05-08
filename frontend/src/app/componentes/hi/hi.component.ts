import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hi',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hi.component.html',
  styleUrls: ['./hi.component.css']
})
export class HiComponent {
  isScrolled = false;
  isNavbarCollapsed = true;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollTop =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    this.isScrolled = scrollTop > window.innerHeight * 0.7;
  }

  toggleNavbar(): void {
    this.isNavbarCollapsed = !this.isNavbarCollapsed;
  }

  closeNavbar(): void {
    this.isNavbarCollapsed = true;
  }
}
