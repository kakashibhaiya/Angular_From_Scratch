import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ng-class',
  imports: [NgClass, FormsModule],
  templateUrl: './ng-class.component.html',
  styleUrl: './ng-class.component.css'
})
export class NgClassComponent {
   
    divBgClor: string = 'bg-success';
    isChecked: boolean = false;
    div3color: string = "";

    addDivColor(className:string) {
      this.divBgClor = className;
    }
}
