import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DInicioComponent } from './d-inicio.component';

describe('DInicioComponent', () => {
  let component: DInicioComponent;
  let fixture: ComponentFixture<DInicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DInicioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
