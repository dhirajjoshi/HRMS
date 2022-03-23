import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalComponent } from './personal/personal.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { ActivityComponent } from './activity/activity.component';
import { CandidateEducationComponent } from './candidate-education/candidate-education.component';
import { CandidateExperienceComponent } from './candidate-experience/candidate-experience.component';
import { CandidatePersonalComponent } from './candidate-personal/candidate-personal.component';
import { CandidateActivityComponent } from './candidate-activity/candidate-activity.component';



@NgModule({
  declarations: [
    PersonalComponent,
    EducationComponent,
    ExperienceComponent,
    ActivityComponent,
    CandidateEducationComponent,
    CandidateExperienceComponent,
    CandidatePersonalComponent,
    CandidateActivityComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CandidateModule { }
