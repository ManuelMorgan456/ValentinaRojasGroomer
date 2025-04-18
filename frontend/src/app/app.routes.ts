import { Routes } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { AcercaComponent } from './componentes/acerca/acerca.component';
import { BarraLateralComponent } from './componentes/barra-lateral/barra-lateral.component';
import { BlogComponent } from './componentes/blog/blog.component';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { GaleriaComponent } from './componentes/galeria/galeria.component';
import { HeaderComponent } from './componentes/header/header.component';
import { LoginComponent } from './componentes/login/login.component';
import { ProductosComponent } from './componentes/productos/productos.component';

export const routes: Routes = [
    { path: '', component: InicioComponent },
    { path: 'acerca', component: AcercaComponent },
    { path: 'barra-lateral', component: BarraLateralComponent },
    { path: 'blog', component: BlogComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'footer', component: FooterComponent },
    { path: 'galeria', component: GaleriaComponent },
    { path: 'header', component: HeaderComponent },
    { path: 'login', component: LoginComponent },
    { path: 'productos', component: ProductosComponent },
];
