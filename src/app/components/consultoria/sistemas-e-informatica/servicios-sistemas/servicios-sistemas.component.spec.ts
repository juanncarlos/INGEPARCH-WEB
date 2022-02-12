import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciosSistemasComponent } from './servicios-sistemas.component';

describe('ServiciosSistemasComponent', () => {
  let component: ServiciosSistemasComponent;
  let fixture: ComponentFixture<ServiciosSistemasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiciosSistemasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiciosSistemasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
