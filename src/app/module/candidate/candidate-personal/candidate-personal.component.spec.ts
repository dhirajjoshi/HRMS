import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatePersonalComponent } from './candidate-personal.component';

describe('CandidatePersonalComponent', () => {
  let component: CandidatePersonalComponent;
  let fixture: ComponentFixture<CandidatePersonalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidatePersonalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidatePersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
