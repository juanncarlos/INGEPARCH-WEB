import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LimiteContraccionComponent } from './limite-contraccion.component';

describe('LimiteContraccionComponent', () => {
  let component: LimiteContraccionComponent;
  let fixture: ComponentFixture<LimiteContraccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LimiteContraccionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LimiteContraccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
