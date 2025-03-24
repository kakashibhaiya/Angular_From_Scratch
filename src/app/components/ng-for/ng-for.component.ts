import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  imports: [NgFor],
  templateUrl: './ng-for.component.html',
  styleUrl: './ng-for.component.css'
})
export class NgForComponent {

    cityList: string[] = ['Delhi', 'Noida', 'Indirapuram', 'Kanawani'];

    empList: any[] = [
      {empId: 101, empName: 'Rahul', empCity: 'Delhi'},
      {empId: 102, empName: 'Rohit', empCity: 'Noida'}, 
      {empId: 103, empName: 'Rajesh', empCity: 'Indirapuram'},
      {empId: 104, empName: 'Raj', empCity: 'Kanawani'}
    ]

}
