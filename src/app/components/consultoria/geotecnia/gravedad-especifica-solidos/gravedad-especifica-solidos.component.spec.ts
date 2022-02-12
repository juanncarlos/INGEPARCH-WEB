import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GravedadEspecificaSolidosComponent } from './gravedad-especifica-solidos.component';

describe('GravedadEspecificaSolidosComponent', () => {
  let component: GravedadEspecificaSolidosComponent;
  let fixture: ComponentFixture<GravedadEspecificaSolidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GravedadEspecificaSolidosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GravedadEspecificaSolidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
