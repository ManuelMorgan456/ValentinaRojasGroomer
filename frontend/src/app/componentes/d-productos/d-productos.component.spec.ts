import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DProductosComponent } from './d-productos.component';

describe('DProductosComponent', () => {
  let component: DProductosComponent;
  let fixture: ComponentFixture<DProductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DProductosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
