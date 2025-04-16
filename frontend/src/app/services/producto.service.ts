import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Producto {
  id?: string;
  nombre: string;
  descripcion: string;
  precio: number;
  stock: number;
  imagen?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private apiUrl = 'http://localhost:4000/productos'; // Cambia esta URL según tu backend

  constructor(private http: HttpClient) { }

  // Obtener todos los productos
  obtenerProductos(): Observable<any[]> {
    const token = localStorage.getItem('token');  // Obtén el token desde el almacenamiento local (localStorage o sessionStorage)

    // Si el token existe, incluirlo en los encabezados de la solicitud
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`  // Agregar el token en el encabezado Authorization
    });

    return this.http.get<any[]>(this.apiUrl);
  }

  // Obtener un solo producto por ID
  obtenerProducto(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  // Crear un nuevo producto
  crearProducto(producto: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, producto);
  }

  // Editar un producto
  actualizarProducto(id: string, producto: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, producto);
  }

  // Eliminar un producto
  eliminarProducto(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
