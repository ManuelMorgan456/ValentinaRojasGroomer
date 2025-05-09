import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';
import { environment } from '../../environments/environment';

export interface BlogPost {
  _id?: string;
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
  private apiUrl: string;
  private uploadUrl: string;

  constructor(
    private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    if (isPlatformBrowser(this.platformId)) {
      this.apiUrl = `${environment.apiUrl}/blog`;
      this.uploadUrl = `${environment.apiUrl.replace('/api', '')}/upload`;
    } else {
      const base = process.env['API_INTERNAL_URL'] || 'http://127.0.0.1:4000';
      this.apiUrl = `${base}/api/blog`;
      this.uploadUrl = `${base}/upload`;
    }
  }

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

  subirImagen(formData: FormData): Observable<{ url: string }> {
    return this.http.post<{ url: string }>(this.uploadUrl, formData);
  }
}
