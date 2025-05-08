import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DGaleriaComponent } from './d-galeria.component';

describe('DGaleriaComponent', () => {
  let component: DGaleriaComponent;
  let fixture: ComponentFixture<DGaleriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DGaleriaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DGaleriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
