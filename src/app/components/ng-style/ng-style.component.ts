import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  imports: [NgStyle],
  templateUrl: './ng-style.component.html',
  styleUrl: './ng-style.component.css'
})
export class NgStyleComponent {

  divBgColor: string = "";
  addDivColor(color: string) {
    this.divBgColor = color;
  }

  mycss: any = {
    'background-color': 'red',
    'width': '200px',
    'height': '200px'
  }
}
