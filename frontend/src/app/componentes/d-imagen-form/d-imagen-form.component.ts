import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ImageService, ImagePair } from '../../services/image.service';

@Component({
  selector: 'app-d-imagen-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './d-imagen-form.component.html',
  styleUrls: ['./d-imagen-form.component.css']
})
export class DImagenFormComponent {
  @Input() imagenEditando?: ImagePair;
  @Output() guardado = new EventEmitter<void>();

  form: FormGroup;
  imagenAFile?: File;
  imagenBFile?: File;

  constructor(private fb: FormBuilder, private imageService: ImageService) {
    this.form = this.fb.group({
      titulo: [''],
      descripcion: ['']
    });
  }

  ngOnInit() {
    if (this.imagenEditando) {
      this.form.patchValue({
        titulo: this.imagenEditando.titulo,
        descripcion: this.imagenEditando.descripcion
      });
    }
  }

  onFileChange(event: Event, tipo: 'A' | 'B') {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      if (tipo === 'A') this.imagenAFile = input.files[0];
      if (tipo === 'B') this.imagenBFile = input.files[0];
    }
  }

  guardar() {
    const formData = new FormData();
    formData.append('titulo', this.form.value.titulo);

    if (this.imagenAFile) formData.append('imagenA', this.imagenAFile);
    if (this.imagenBFile) formData.append('imagenB', this.imagenBFile);

    if (this.imagenEditando && this.imagenEditando._id) {
      this.imageService.updateImagePair(this.imagenEditando._id, formData).subscribe(() => {
        this.guardado.emit();
      });
    } else {
      this.imageService.createImagePair(formData).subscribe(() => {
        this.guardado.emit();
      });
    }
  }
}
