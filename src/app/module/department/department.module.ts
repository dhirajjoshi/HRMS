import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { AddDepartmentComponent } from './add-department/add-department.component';
import { DisplayDepartmentComponent } from './display-department/display-department.component';
import { SpinnersAngularModule } from 'spinners-angular';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxPaginationModule } from 'ngx-pagination';



@NgModule({
  declarations: [
    AddDepartmentComponent,
    DisplayDepartmentComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SpinnersAngularModule,
    NgSelectModule,
    NgxPaginationModule
  ],
  exports:[
    AddDepartmentComponent,
    DisplayDepartmentComponent
  ]
})
export class DepartmentModule { }
