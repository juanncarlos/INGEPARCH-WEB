import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarreterasComponent } from './carreteras.component';

describe('CarreterasComponent', () => {
  let component: CarreterasComponent;
  let fixture: ComponentFixture<CarreterasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarreterasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarreterasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
