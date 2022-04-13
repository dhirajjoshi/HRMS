import { Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-display-department',
  templateUrl: './display-department.component.html',
  styleUrls: ['./display-department.component.css']
})
export class DisplayDepartmentComponent implements OnInit {
  @Input() department: any[1];
  titleSortFlag=false
  titleList=[];
  // collection:any=[]
  p=1
  constructor() { 
    this.titleList=this.department.departmentType
  }
  ngOnInit(): void {
    console.log(this.department);
     
  }
  editDepartment(){}
  deleteDepartment(){}
  // sortTitle() {
  //   this.titleSortFlag = !this.titleSortFlag;
  //   this.titleList.sort((a: this.department.departmentType, b: this.department.departmentType) => {
  //     if (a.title < b.title) {
  //       if (this.titleSortFlag) {
  //         return 1;
  //       } else {
  //         return -1;
  //       }
  //     } else if (a.title > b.title) {
  //       if (this.titleSortFlag) {
  //         return -1;
  //       } else {
  //         return 1;
  //       }
  //     }
  //     return 0;
  //   });
  // }
}
