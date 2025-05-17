import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DImagenFormComponent } from './d-imagen-form.component';

describe('DImagenFormComponent', () => {
  let component: DImagenFormComponent;
  let fixture: ComponentFixture<DImagenFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DImagenFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DImagenFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
