import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LimiteLiquidoPlasticoIndicePlasticoComponent } from './limite-liquido-plastico-indice-plastico.component';

describe('LimiteLiquidoPlasticoIndicePlasticoComponent', () => {
  let component: LimiteLiquidoPlasticoIndicePlasticoComponent;
  let fixture: ComponentFixture<LimiteLiquidoPlasticoIndicePlasticoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LimiteLiquidoPlasticoIndicePlasticoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LimiteLiquidoPlasticoIndicePlasticoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
