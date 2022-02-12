import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TriaxialComponent } from './triaxial.component';

describe('TriaxialComponent', () => {
  let component: TriaxialComponent;
  let fixture: ComponentFixture<TriaxialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TriaxialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TriaxialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
