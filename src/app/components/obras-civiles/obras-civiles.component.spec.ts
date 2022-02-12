import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObrasCivilesComponent } from './obras-civiles.component';

describe('ObrasCivilesComponent', () => {
  let component: ObrasCivilesComponent;
  let fixture: ComponentFixture<ObrasCivilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObrasCivilesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObrasCivilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
