import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';
import { ProductoService, Producto } from '../../services/producto.service';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent],
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {

  productos: Producto[] = [];

  constructor(private productoService: ProductoService) { }

  ngOnInit(): void {
    this.productoService.obtenerProductos().subscribe((data) => {
      this.productos = data;
      console.log('Productos:', this.productos);
    });
  }
}
