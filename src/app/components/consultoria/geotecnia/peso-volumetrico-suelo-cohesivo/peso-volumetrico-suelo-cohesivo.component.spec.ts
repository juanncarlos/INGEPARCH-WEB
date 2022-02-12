import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PesoVolumetricoSueloCohesivoComponent } from './peso-volumetrico-suelo-cohesivo.component';

describe('PesoVolumetricoSueloCohesivoComponent', () => {
  let component: PesoVolumetricoSueloCohesivoComponent;
  let fixture: ComponentFixture<PesoVolumetricoSueloCohesivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PesoVolumetricoSueloCohesivoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PesoVolumetricoSueloCohesivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
