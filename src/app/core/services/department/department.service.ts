import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  private teamLead:any=[];
  private projectManager:any=[];
  private departmentType:any=[];
  constructor(){
  }
  update(val:string){
    if(val.toLowerCase()==='teamlead'){
      this.teamLead=environment.teamLeader
      return this.teamLead
    }
    else if(val.toLowerCase()==='projectmanager'){
      this.projectManager=environment.projectManager
      return this.projectManager
    }
    else if(val.toLowerCase()==='departmenttype'){
      this.departmentType=environment.departmentType
      return this.departmentType
    }
  }
}
