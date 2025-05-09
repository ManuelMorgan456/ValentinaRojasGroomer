import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DBlogFormComponent } from './d-blog-form.component';

describe('DBlogFormComponent', () => {
  let component: DBlogFormComponent;
  let fixture: ComponentFixture<DBlogFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DBlogFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DBlogFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
