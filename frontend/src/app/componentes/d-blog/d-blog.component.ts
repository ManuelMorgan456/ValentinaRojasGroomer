import { Component, OnInit } from '@angular/core';
import { BarraLateralComponent } from "../barra-lateral/barra-lateral.component";
import { DBlogFormComponent } from "../d-blog-form/d-blog-form.component";
import { BlogService, BlogPost } from '../../services/blog.service';
import { CommonModule } from '@angular/common';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-d-blog',
  standalone: true,
  templateUrl: './d-blog.component.html',
  styleUrls: ['./d-blog.component.css'],
  imports: [
    BarraLateralComponent,
    CommonModule,
    DBlogFormComponent
  ]
})
export class DBlogComponent implements OnInit {
  posts: (BlogPost & { imagenFull: string })[] = [];
  loading = true;

  modoCrear = false;
  postEditando?: BlogPost;

  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.cargarPosts();
  }

  cargarPosts(): void {
    this.loading = true;
    this.blogService.getPosts().subscribe({
      next: (data) => {
        // Ajustamos la URL completa de la imagen
        this.posts = data.map(p => ({
          ...p,
          imagenFull: p.imagen.startsWith('http')
            ? p.imagen
            : `${environment.apiUrl.replace(/\/api$/, '')}${p.imagen}`
        }));
        this.loading = false;
      },
      error: (err) => {
        console.error('Error al cargar posts:', err);
        this.loading = false;
      }
    });
  }

  eliminarPost(id: string): void {
    if (confirm('¿Estás seguro de eliminar este post?')) {
      this.blogService.deletePost(id).subscribe(() => {
        this.cargarPosts();
      });
    }
  }

  togglePublicacion(id: string): void {
    // Buscamos el post por id
    const post = this.posts.find(p => p._id === id)!;
    const actualizado = { ...post, publicado: !post.publicado };
    this.blogService.updatePost(id, actualizado).subscribe(() => {
      post.publicado = actualizado.publicado;
    });
  }

  mostrarFormularioCrear(): void {
    this.postEditando = undefined;
    this.modoCrear = true;
  }

  editarPost(post: BlogPost): void {
    this.postEditando = post;
    this.modoCrear = true;
  }

  onGuardado(): void {
    this.cargarPosts();
    this.modoCrear = false;
    this.postEditando = undefined;
  }
  cancelarFormulario() {
  this.modoCrear = false;
}

}
