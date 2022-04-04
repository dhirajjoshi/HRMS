import { EventEmitter, Injectable, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  private teamLead:any=[];
  private projectManager:any=[];
  constructor(){
  }
  update(val:any){
    if(val==='teamLead'){
      this.teamLead=environment.teamLeader
      return this.teamLead
    }
    else if(val==='projectManager'){
      this.projectManager=environment.projectManager
      return this.projectManager
    }
    
  }
}
