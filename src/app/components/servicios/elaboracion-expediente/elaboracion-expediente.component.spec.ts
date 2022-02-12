import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElaboracionExpedienteComponent } from './elaboracion-expediente.component';

describe('ElaboracionExpedienteComponent', () => {
  let component: ElaboracionExpedienteComponent;
  let fixture: ComponentFixture<ElaboracionExpedienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElaboracionExpedienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElaboracionExpedienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
