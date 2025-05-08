import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DCrearPerfilComponent } from './d-crear-perfil.component';

describe('DCrearPerfilComponent', () => {
  let component: DCrearPerfilComponent;
  let fixture: ComponentFixture<DCrearPerfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DCrearPerfilComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DCrearPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
