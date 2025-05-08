import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DMetricasComponent } from './d-metricas.component';

describe('DMetricasComponent', () => {
  let component: DMetricasComponent;
  let fixture: ComponentFixture<DMetricasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DMetricasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DMetricasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
