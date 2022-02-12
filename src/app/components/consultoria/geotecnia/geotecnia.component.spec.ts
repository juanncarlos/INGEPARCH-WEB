import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeotecniaComponent } from './geotecnia.component';

describe('GeotecniaComponent', () => {
  let component: GeotecniaComponent;
  let fixture: ComponentFixture<GeotecniaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeotecniaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeotecniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
