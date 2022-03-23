import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CandidateModule } from './module/candidate/candidate.module';
import { EmployeeModule } from './module/employee/employee.module';

import { AppComponent } from './app.component';
import { CustomPipe } from './shared/pipe/custom/custom.pipe';


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
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
