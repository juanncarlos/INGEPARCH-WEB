import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenidoHumedadComponent } from './contenido-humedad.component';

describe('ContenidoHumedadComponent', () => {
  let component: ContenidoHumedadComponent;
  let fixture: ComponentFixture<ContenidoHumedadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContenidoHumedadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContenidoHumedadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
