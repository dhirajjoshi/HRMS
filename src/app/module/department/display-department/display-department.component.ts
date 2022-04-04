import { Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-display-department',
  templateUrl: './display-department.component.html',
  styleUrls: ['./display-department.component.css']
})
export class DisplayDepartmentComponent implements OnInit {
  @Input() department: any[1];
  // collection:any=[]
  p=1
  constructor() { 
  }
  ngOnInit(): void {
    console.log(this.department);  
  }

    // if(this.department==undefined||this.department==null){
    // }
    // else{
    //   for (let i = 0; i < this.department.length; i++) {
    //     this.collection.push(this.department[i]);
    //   }
    // }

  editDepartment(){}
  deleteDepartment(){ }
}
