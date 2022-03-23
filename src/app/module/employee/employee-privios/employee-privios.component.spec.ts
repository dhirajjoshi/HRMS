import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeePriviosComponent } from './employee-privios.component';

describe('EmployeePriviosComponent', () => {
  let component: EmployeePriviosComponent;
  let fixture: ComponentFixture<EmployeePriviosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeePriviosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeePriviosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
