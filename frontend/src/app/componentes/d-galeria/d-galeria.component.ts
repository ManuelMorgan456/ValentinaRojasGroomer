import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DImagenFormComponent } from '../d-imagen-form/d-imagen-form.component';
import { ImageService, ImagePair } from '../../services/image.service';

@Component({
  selector: 'app-d-galeria',
  standalone: true,
  imports: [
    CommonModule,
    DImagenFormComponent
  ],
  templateUrl: './d-galeria.component.html',
  styleUrls: ['./d-galeria.component.css']
})
export class DGaleriaComponent implements OnInit {
  imagenes: ImagePair[] = [];
  loading = true;

  modoCrear = false;
  imagenEditando?: ImagePair;

  constructor(private imageService: ImageService) { }

  ngOnInit(): void {
    this.cargarImagenes();
  }

  cargarImagenes(): void {
    this.loading = true;
    this.imageService.getImagePairs().subscribe({
      next: (data) => {
        this.imagenes = data;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error al cargar imágenes:', err);
        this.loading = false;
      }
    });
  }

  eliminarImagen(id: string): void {
    if (confirm('¿Estás seguro de eliminar este par de imágenes?')) {
      this.imageService.deleteImagePair(id).subscribe(() => {
        this.cargarImagenes();
      });
    }
  }

  mostrarFormularioCrear(): void {
    this.imagenEditando = undefined;
    this.modoCrear = true;
  }

  editarImagen(imagen: ImagePair): void {
    this.imagenEditando = imagen;
    this.modoCrear = true;
  }

  onGuardado(): void {
    this.cargarImagenes();
    this.modoCrear = false;
    this
  }
}