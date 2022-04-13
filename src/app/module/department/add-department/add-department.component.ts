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
  departmentType:any=[]
  

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
      isActive:['']
      })
      this.teamLead=this.data.update('teamLead')
      this.projectManager=this.data.update('projectManager')
      this.departmentType=this.data.update('departmentType')
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
      if(temp.status==''){
        temp.status=true
      }
      else if(temp.status==null){
        temp.status=false
      }
    
        if(temp.departmentType.toLowerCase()!==this.departmentType[0].toLowerCase())
          {
            this.departmentType.push(temp.departmentType)
            this.department.push(temp)
            this.showToastr('Department Added','Success')
          }
        else{
            this.showToastr('Department Type is there','Error')
          }  
      
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
