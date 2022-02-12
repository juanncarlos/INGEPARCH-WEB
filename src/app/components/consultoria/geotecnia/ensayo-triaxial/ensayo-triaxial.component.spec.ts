import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnsayoTriaxialComponent } from './ensayo-triaxial.component';

describe('EnsayoTriaxialComponent', () => {
  let component: EnsayoTriaxialComponent;
  let fixture: ComponentFixture<EnsayoTriaxialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnsayoTriaxialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnsayoTriaxialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
