import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaCbrComponent } from './prueba-cbr.component';

describe('PruebaCbrComponent', () => {
  let component: PruebaCbrComponent;
  let fixture: ComponentFixture<PruebaCbrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PruebaCbrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PruebaCbrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
