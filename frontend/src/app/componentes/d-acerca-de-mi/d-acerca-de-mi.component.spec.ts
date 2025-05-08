import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DAcercaDeMiComponent } from './d-acerca-de-mi.component';

describe('DAcercaDeMiComponent', () => {
  let component: DAcercaDeMiComponent;
  let fixture: ComponentFixture<DAcercaDeMiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DAcercaDeMiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DAcercaDeMiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
