import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SistemasEInformaticaComponent } from './sistemas-e-informatica.component';

describe('SistemasEInformaticaComponent', () => {
  let component: SistemasEInformaticaComponent;
  let fixture: ComponentFixture<SistemasEInformaticaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SistemasEInformaticaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SistemasEInformaticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
