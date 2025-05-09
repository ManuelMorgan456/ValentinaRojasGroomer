import { Routes } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { AcercaComponent } from './componentes/acerca/acerca.component';
import { BlogComponent } from './componentes/blog/blog.component';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { GaleriaComponent } from './componentes/galeria/galeria.component';
import { HeaderComponent } from './componentes/header/header.component';
import { HiComponent } from './componentes/hi/hi.component';
import { LoginComponent } from './componentes/login/login.component';
import { ProductosComponent } from './componentes/productos/productos.component';
import { ComponentesComponent } from './componentes/componentes.component';
import { ContactameComponent } from './componentes/contactame/contactame.component';
import { PeluqueriaComponent } from './componentes/peluqueria/peluqueria.component';
import { ServiciosComponent } from './componentes/servicios/servicios.component';
import { DInicioComponent } from './componentes/d-inicio/d-inicio.component';
import { DPeluqueriaComponent } from './componentes/d-peluqueria/d-peluqueria.component';
import { DServiciosComponent } from './componentes/d-servicios/d-servicios.component';
import { DProductosComponent } from './componentes/d-productos/d-productos.component';
import { DGaleriaComponent } from './componentes/d-galeria/d-galeria.component';
import { DBlogComponent } from './componentes/d-blog/d-blog.component';
import { DBlogFormComponent } from './componentes/d-blog-form/d-blog-form.component';
import { DAcercaDeMiComponent } from './componentes/d-acerca-de-mi/d-acerca-de-mi.component';
import { DContactameComponent } from './componentes/d-contactame/d-contactame.component';
import { DMetricasComponent } from './componentes/d-metricas/d-metricas.component';
import { DCrearPerfilComponent } from './componentes/d-crear-perfil/d-crear-perfil.component';




export const routes: Routes = [
    { path: '', redirectTo: 'inicio', pathMatch: 'full' },

    // Público
    { path: 'inicio', component: InicioComponent },
    { path: 'acerca', component: AcercaComponent },
    { path: 'blog', component: BlogComponent },
    { path: 'galeria', component: GaleriaComponent },
    { path: 'productos', component: ProductosComponent },
    { path: 'contactame', component: ContactameComponent },
    { path: 'peluqueria', component: PeluqueriaComponent },
    { path: 'servicios', component: ServiciosComponent },
    { path: 'header', component: HeaderComponent },
    { path: 'footer', component: FooterComponent },
    { path: 'login', component: LoginComponent },
    { path: 'hi', component: HiComponent },
    { path: 'componentes', component: ComponentesComponent },

    // Dashboard (privado)
    {
        path: 'dashboard',
        component: DashboardComponent,
        children: [
            { path: 'inicio', component: DInicioComponent },
            { path: 'peluqueria', component: DPeluqueriaComponent },
            { path: 'servicios', component: DServiciosComponent },
            { path: 'productos', component: DProductosComponent },
            { path: 'galeria', component: DGaleriaComponent },
            { path: 'blog', component: DBlogComponent },
            { path: 'blog-form', component: DBlogFormComponent },
            { path: 'acerca-de-mi', component: DAcercaDeMiComponent },
            { path: 'contactame', component: DContactameComponent },
            { path: 'metricas', component: DMetricasComponent },
            { path: 'crear-perfil', component: DCrearPerfilComponent },
            { path: '', redirectTo: 'inicio', pathMatch: 'full' }
        ]
    }
];