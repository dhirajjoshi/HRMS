import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CandidateModule } from './module/candidate/candidate.module';
import { EmployeeModule } from './module/employee/employee.module';

import { AppComponent } from './app.component';
import { CustomPipe } from './shared/pipe/custom/custom.pipe';
import { DepartmentModule } from './module/department/department.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxPaginationModule } from 'ngx-pagination';
import { DepartmentService } from './core/services/department/department.service';

@NgModule({
  declarations: [
    AppComponent,
    CustomPipe
  ],
  imports: [
    BrowserModule,
    CandidateModule,
    EmployeeModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      preventDuplicates:true,
      newestOnTop: true,
      progressBar: true,
      positionClass: "toast-bottom-center",
      timeOut:2000
    }),
    DepartmentModule,
    FontAwesomeModule,
    NgMultiSelectDropDownModule.forRoot(),
    NgSelectModule,
    NgxPaginationModule
  ],
  providers: [DepartmentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
