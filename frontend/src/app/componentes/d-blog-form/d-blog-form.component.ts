import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BlogPost, BlogService } from '../../services/blog.service';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-d-blog-form',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './d-blog-form.component.html',
  styleUrls: ['./d-blog-form.component.css']
})
export class DBlogFormComponent implements OnInit {
  @Input() post?: BlogPost;
  @Output() onSuccess = new EventEmitter<void>();

  blogForm!: FormGroup;
  loading = false;
  imagenSubida: string | null = null;

  constructor(private fb: FormBuilder, private blogService: BlogService) { }

  ngOnInit(): void {
    this.blogForm = this.fb.group({
      titulo: [this.post?.titulo || '', Validators.required],
      resumen: [this.post?.resumen || '', Validators.required],
      detalle: [this.post?.detalle || '', Validators.required],
      contenido: [this.post?.contenido || '', Validators.required],
      imagen: [this.post?.imagen || '', Validators.required],
      etiquetas: [this.post?.etiquetas?.join(', ') || '', Validators.required],
      publicado: [this.post?.publicado || false]
    });

    // Mostrar vista previa si ya hay una imagen (modo edición)
    if (this.post?.imagen) {
      this.imagenSubida = this.post.imagen;
    }
  }

  onFileSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      const formData = new FormData();
      formData.append('imagen', file);

      this.blogService.subirImagen(formData).subscribe({
        next: (res) => {
          this.imagenSubida = res.url; // Asegúrate de que 'url' coincide con la clave en la respuesta del backend
          this.blogForm.patchValue({ imagen: this.imagenSubida });
        },
        error: (err) => {
          console.error('Error al subir imagen:', err);
        }
      });
    }
  }

  actualizarEtiquetas(event: Event) {
    const valor = (event.target as HTMLInputElement).value;
    // Guardamos siempre como string
    this.blogForm.patchValue({ etiquetas: valor });
  }

  guardar(): void {
    if (this.blogForm.invalid) return;

    this.loading = true;
    const formValue = this.blogForm.value as any;

    // Convertimos etiquetas a array
    const etiquetasArray: string[] = (formValue.etiquetas as string)
      .split(',')
      .map((tag: string) => tag.trim())
      .filter((tag: string) => tag.length > 0);

    // Objeto base (sin _id) para creación y edición
    const basePost = {
      titulo: formValue.titulo,
      resumen: formValue.resumen,
      detalle: formValue.detalle,
      contenido: formValue.contenido,
      imagen: formValue.imagen,
      etiquetas: etiquetasArray,
      publicado: formValue.publicado
    };

    let request$;

    if (this.post) {
      // Edición: aseguramos que _id no es undefined
      const postData = { ...basePost, _id: this.post._id! };
      request$ = this.blogService.updatePost(this.post._id!, postData);
    } else {
      // Creación: sólo pasamos basePost
      request$ = this.blogService.createPost(basePost);
    }

    request$.subscribe({
      next: () => {
        this.loading = false;
        this.onSuccess.emit();
        this.blogForm.reset();
        this.imagenSubida = null;
      },
      error: (err) => {
        this.loading = false;
        const backendMsg = err.error?.msg || err.message;
        console.error('Error al guardar:', backendMsg);
        alert('Error al guardar: ' + backendMsg);
      }
    });
  }




}
