import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DPeluqueriaComponent } from './d-peluqueria.component';

describe('DPeluqueriaComponent', () => {
  let component: DPeluqueriaComponent;
  let fixture: ComponentFixture<DPeluqueriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DPeluqueriaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DPeluqueriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
