import { Component, OnInit } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { HiComponent } from "../hi/hi.component";
import { CommonModule } from '@angular/common';
import { BlogService, BlogPost } from '../../services/blog.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [FooterComponent, HiComponent, CommonModule],
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  categorias = ['Alimentación', 'Cuidados', 'Eventos', 'Higiene'];
  categoriaSeleccionada = 'Alimentación';
  posts: BlogPost[] = [];
  loading: boolean = true;

  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.loading = true;

    this.blogService.getPosts().subscribe({
      next: (data) => {
        this.posts = data
          .filter(post => post.publicado)
          .map(post => ({
            ...post,
            imagen: post.imagen?.startsWith('http')
              ? post.imagen
              : `${environment.apiUrl.replace('/api', '')}${post.imagen}`,
            expandido: false
          }));
        this.loading = false;
      },
      error: (err) => {
        console.error('Error cargando posts', err);
        this.loading = false;
      }
    });
  }

  seleccionarCategoria(categoria: string) {
    this.categoriaSeleccionada = categoria;
  }

  toggleExpandir(post: BlogPost) {
    post.expandido = !post.expandido;
  }

  get postsFiltrados(): BlogPost[] {
    return this.posts.filter(
      p => p.etiquetas.includes(this.categoriaSeleccionada)
    );
  }
}
