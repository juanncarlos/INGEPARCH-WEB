import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiquidacionObrasComponent } from './liquidacion-obras.component';

describe('LiquidacionObrasComponent', () => {
  let component: LiquidacionObrasComponent;
  let fixture: ComponentFixture<LiquidacionObrasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiquidacionObrasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LiquidacionObrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
