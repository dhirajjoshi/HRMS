import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { environment } from '../../../../environments/environment'
import { CustomVelidators } from 'src/app/shared/utility/CustomVelidators';
import { ToastrService } from 'ngx-toastr';
import { SpinnersAngularModule } from 'spinners-angular';
import { Regex } from 'src/app/shared/utility/regex.utility';
import { faL } from '@fortawesome/free-solid-svg-icons';
import { DepartmentService } from 'src/app/core/services/department/department.service';


@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.css']
})
export class AddDepartmentComponent {

  department:any=[]
  fg: any;
  isFormSubmitted=false
  

  teamLead:any=[];
  projectManager=[];

  constructor(private data:DepartmentService,fb:FormBuilder,private toastr: ToastrService) { 
    this.fg=fb.group({
      departmentType:["",
      [
        Validators.required,
        // CustomVelidators.shouldBeUnique,
        Validators.pattern(Regex.charsOnly()),
        Validators.minLength(3),
      ]
    ],
      teamLead:["", Validators.required],
      projectManager:["",Validators.required],
      isActive:[""]
      })
      this.teamLead=this.data.update('teamLead')
      this.projectManager=this.data.update('projectManager')
  }

  get controls(){
    return this.fg.controls;
  }

  save(){
    this.isFormSubmitted=true
// console.log(this.controls['teamLead'].value);
    if(this.fg.valid){
      let temp=null;
      // console.log(uuid());
      
      temp={
        departmentType:this.controls['departmentType'].value,
        teamLeader:this.controls['teamLead'].value,
        projectManager:this.controls['projectManager'].value,
        status:this.controls['isActive'].value
      }
      // console.log(environment.departmentType);
      this.department.push(temp)
      environment.departmentType.push(this.controls['departmentType'].value)
      // console.log(environment.departmentType);
      
      // console.log(this.department);   
      this.showToastr('Department Added','Success')
      this.fg.reset();
      this.isFormSubmitted=false
    } 
    else{
      this.showToastr('Department Not Added','Error')
    }
  }

  showToastr(_value: string,_status:string){
    // this.toastr.options.closeDuration = 300;
    if(_status.toUpperCase()==='SUCCESS'){
      this.toastr.success(_value, _status,{
        "closeButton": true,
      });
    }
    else{
      this.toastr.error(_value,_status)
    }
  }
}
