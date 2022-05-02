import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-display-department',
  templateUrl: './display-department.component.html',
  styleUrls: ['./display-department.component.css']
})
export class DisplayDepartmentComponent implements OnInit {
  @Output() editValue: any=new EventEmitter();
  @Input() department: any[1];
  titleSortFlag=false
  titleList=[];
  // collection:any=[]
  p=1
  constructor() { 
    // this.titleList=this.department.departmentType
  }
  ngOnInit(): void {
    console.log(this.department);
     
  }
  editDepartment(dep:any){
    this.editValue.emit(dep);
  }
  deleteDepartment(dep: any){
          // //remove row from table
          const departmentIndex = this.department.findIndex((department:any) => {
            return department.departmentId === dep.departmentId;
          });
          this.department.splice(departmentIndex,1);      
          }
          
  }