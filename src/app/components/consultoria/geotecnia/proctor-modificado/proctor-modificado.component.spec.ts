import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProctorModificadoComponent } from './proctor-modificado.component';

describe('ProctorModificadoComponent', () => {
  let component: ProctorModificadoComponent;
  let fixture: ComponentFixture<ProctorModificadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProctorModificadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProctorModificadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
