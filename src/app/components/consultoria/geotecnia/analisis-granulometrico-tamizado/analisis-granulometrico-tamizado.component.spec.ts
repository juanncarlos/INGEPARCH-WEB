import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalisisGranulometricoTamizadoComponent } from './analisis-granulometrico-tamizado.component';

describe('AnalisisGranulometricoTamizadoComponent', () => {
  let component: AnalisisGranulometricoTamizadoComponent;
  let fixture: ComponentFixture<AnalisisGranulometricoTamizadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnalisisGranulometricoTamizadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalisisGranulometricoTamizadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
