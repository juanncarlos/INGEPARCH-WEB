import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciosGeotecniaComponent } from './servicios-geotecnia.component';

describe('ServiciosGeotecniaComponent', () => {
  let component: ServiciosGeotecniaComponent;
  let fixture: ComponentFixture<ServiciosGeotecniaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiciosGeotecniaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiciosGeotecniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
