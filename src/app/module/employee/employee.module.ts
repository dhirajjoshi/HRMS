import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalComponent } from './personal/personal.component';
import { ContactComponent } from './contact/contact.component';
import { AddressComponent } from './address/address.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { CheckListComponent } from './check-list/check-list.component';
import { EmployeeAddressComponent } from './employee-address/employee-address.component';
import { EmployeeCheckListComponent } from './employee-check-list/employee-check-list.component';
import { EmployeeContactComponent } from './employee-contact/employee-contact.component';
import { EmployeeEducationComponent } from './employee-education/employee-education.component';
import { EmployeeExperienceComponent } from './employee-experience/employee-experience.component';
import { EmployeePersonalComponent } from './employee-personal/employee-personal.component';
import { EmployeePriviosComponent } from './employee-privios/employee-privios.component';



@NgModule({
  declarations: [
    PersonalComponent,
    ContactComponent,
    AddressComponent,
    EducationComponent,
    ExperienceComponent,
    CheckListComponent,
    EmployeeAddressComponent,
    EmployeeCheckListComponent,
    EmployeeContactComponent,
    EmployeeEducationComponent,
    EmployeeExperienceComponent,
    EmployeePersonalComponent,
    EmployeePriviosComponent
  ],
  imports: [
    CommonModule
  ]
})
export class EmployeeModule { }
