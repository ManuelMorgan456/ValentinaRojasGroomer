import { Component, OnInit } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { HiComponent } from "../hi/hi.component";
import { CommonModule } from '@angular/common';
import { BlogService, BlogPost } from '../../services/blog.service'; // Asegúrate de importar el servicio



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

  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.blogService.getPosts().subscribe(data => {
      this.posts = data
        .filter(post => post.publicado)
        .map(post => ({ ...post, expandido: false })); // 👈 agrega `expandido` a cada post
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
