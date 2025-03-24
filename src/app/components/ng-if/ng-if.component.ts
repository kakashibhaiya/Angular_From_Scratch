import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ng-if',
  imports: [CommonModule, FormsModule],
  templateUrl: './ng-if.component.html',
  styleUrl: './ng-if.component.css'
})
export class NgIfComponent {

  number1: string = '';
  number2: string = '';
 
  div1Visible:boolean = true;

  hideDiv1(){
    this.div1Visible = false;
  }
  showDiv1(){
    this.div1Visible = true;
  }
}
