import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DServiciosComponent } from './d-servicios.component';

describe('DServiciosComponent', () => {
  let component: DServiciosComponent;
  let fixture: ComponentFixture<DServiciosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DServiciosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DServiciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
