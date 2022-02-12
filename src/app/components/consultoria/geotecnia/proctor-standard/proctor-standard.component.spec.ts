import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProctorStandardComponent } from './proctor-standard.component';

describe('ProctorStandardComponent', () => {
  let component: ProctorStandardComponent;
  let fixture: ComponentFixture<ProctorStandardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProctorStandardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProctorStandardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
