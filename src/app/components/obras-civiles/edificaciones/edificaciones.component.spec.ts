import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdificacionesComponent } from './edificaciones.component';

describe('EdificacionesComponent', () => {
  let component: EdificacionesComponent;
  let fixture: ComponentFixture<EdificacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdificacionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EdificacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
