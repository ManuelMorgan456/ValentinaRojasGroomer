import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface ImagePair {
  _id?: string;
  titulo: string;
  descripcion?: string;
  imagenA: string;  // URL o nombre de la imagen 1
  imagenB: string;  // URL o nombre de la imagen 2
  creadoEn?: Date;
}

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  private apiUrl = `${environment.apiUrl}/imagenes`;

  constructor(private http: HttpClient) { }

  // Obtener todas las parejas de imágenes (rutas privadas)
  getImagePairs(): Observable<ImagePair[]> {
    return this.http.get<ImagePair[]>(this.apiUrl);
  }

  // Obtener imágenes públicas (ruta pública)
  getPublicImages(): Observable<ImagePair[]> {
    return this.http.get<ImagePair[]>(`${this.apiUrl}/publicas`);
  }

  // Crear nueva pareja de imágenes
  createImagePair(data: FormData): Observable<ImagePair> {
    return this.http.post<ImagePair>(this.apiUrl, data);
  }

  // Actualizar una pareja existente
  updateImagePair(id: string, data: FormData): Observable<ImagePair> {
    return this.http.put<ImagePair>(`${this.apiUrl}/${id}`, data);
  }

  // Eliminar una pareja
  deleteImagePair(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}

