import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RupturaProvetasComponent } from './ruptura-provetas.component';

describe('RupturaProvetasComponent', () => {
  let component: RupturaProvetasComponent;
  let fixture: ComponentFixture<RupturaProvetasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RupturaProvetasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RupturaProvetasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
