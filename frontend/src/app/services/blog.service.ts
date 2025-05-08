import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface BlogPost {
  _id: string;
  titulo: string;
  resumen: string;
  detalle: string;
  contenido: string;
  imagen: string;
  creadoPor?: string;
  fechaCreacion?: string;
  etiquetas: string[];
  publicado: boolean;
  expandido?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private apiUrl = 'http://localhost:4000/api/blog'; // Asegúrate de que esta URL apunte a tu backend

  constructor(private http: HttpClient) { }

  getPosts(): Observable<BlogPost[]> {
    return this.http.get<BlogPost[]>(this.apiUrl);
  }

  getPost(id: string): Observable<BlogPost> {
    return this.http.get<BlogPost>(`${this.apiUrl}/${id}`);
  }

  createPost(post: BlogPost): Observable<BlogPost> {
    return this.http.post<BlogPost>(this.apiUrl, post);
  }

  updatePost(id: string, post: BlogPost): Observable<BlogPost> {
    return this.http.put<BlogPost>(`${this.apiUrl}/${id}`, post);
  }

  deletePost(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

}
