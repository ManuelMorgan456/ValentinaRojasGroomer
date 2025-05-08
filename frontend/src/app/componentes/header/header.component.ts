import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  ngOnInit(): void {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (navbar) {
          if (window.scrollY > 20) {
            navbar.classList.add('scrolled');
          } else {
            navbar.classList.remove('scrolled');
          }
        }
      });
    }
  }
}

// import { Component, HostListener, } from '@angular/core';
// import { Router, NavigationEnd } from '@angular/router';
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-header',
//   standalone: true,
//   imports: [CommonModule],
//   templateUrl: './header.component.html',
//   styleUrls: ['./header.component.css']
// })
// export class HeaderComponent {
//   navbarClasses: string = 'navbar navbar-expand-lg custom-navbar';

//   constructor(private router: Router) {
//     this.router.events.subscribe(event => {
//       if (event instanceof NavigationEnd) {
//         this.updateNavbarClass(event.urlAfterRedirects);
//       }
//     });
//   }

//   updateNavbarClass(url: string): void {
//     const isInicio = url.includes('/inicio');
//     const isScrolled = window.scrollY > 0;

//     this.navbarClasses = 'navbar navbar-expand-lg custom-navbar';
//     if (isInicio) {
//       this.navbarClasses += isScrolled ? ' scrolled' : ' home';
//     } else {
//       this.navbarClasses += ' scrolled';
//     }
//   }

//   @HostListener('window:scroll', [])
//   onWindowScroll(): void {
//     const currentUrl = this.router.url;
//     this.updateNavbarClass(currentUrl);
//   }
// }
