import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DContactameComponent } from './d-contactame.component';

describe('DContactameComponent', () => {
  let component: DContactameComponent;
  let fixture: ComponentFixture<DContactameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DContactameComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DContactameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
