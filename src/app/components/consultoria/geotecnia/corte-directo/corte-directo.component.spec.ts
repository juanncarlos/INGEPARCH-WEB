import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorteDirectoComponent } from './corte-directo.component';

describe('CorteDirectoComponent', () => {
  let component: CorteDirectoComponent;
  let fixture: ComponentFixture<CorteDirectoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorteDirectoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CorteDirectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
