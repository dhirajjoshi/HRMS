import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeCheckListComponent } from './employee-check-list.component';

describe('EmployeeCheckListComponent', () => {
  let component: EmployeeCheckListComponent;
  let fixture: ComponentFixture<EmployeeCheckListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeCheckListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeCheckListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
