import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { CandidateEducationComponent } from './module/candidate/candidate-education/candidate-education.component';
import { CandidateExperienceComponent } from './module/candidate/candidate-experience/candidate-experience.component';
import { CandidatePersonalComponent } from './module/candidate/candidate-personal/candidate-personal.component';
import { CandidateModule } from './module/candidate/candidate.module';
import { EmployeeModule } from './module/employee/employee.module';
import { CandidateActivityComponent } from './module/candidate/candidate-activity/candidate-activity.component';
import { EmployeeAddressComponent } from './module/employee/employee-address/employee-address.component';
import { EmployeeCheckListComponent } from './module/employee/employee-check-list/employee-check-list.component';
import { EmployeeContactComponent } from './module/employee/employee-contact/employee-contact.component';
import { EmployeeEducationComponent } from './module/employee/employee-education/employee-education.component';
import { EmployeeExperienceComponent } from './module/employee/employee-experience/employee-experience.component';
import { EmployeePersonalComponent } from './module/employee/employee-personal/employee-personal.component';
import { EmployeePriviosComponent } from './module/employee/employee-privios/employee-privios.component';
import { CustomPipe } from './shared/pipe/custom/custom.pipe';


@NgModule({
  declarations: [
    AppComponent,
    CandidateActivityComponent,
    CandidateEducationComponent,
    CandidateExperienceComponent,
    CandidatePersonalComponent,
    EmployeeAddressComponent,
    EmployeeCheckListComponent,
    EmployeeContactComponent,
    EmployeeEducationComponent,
    EmployeeExperienceComponent,
    EmployeePersonalComponent,
    EmployeePriviosComponent,
    CustomPipe
  ],
  imports: [
    BrowserModule,
    CandidateModule,
    EmployeeModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
