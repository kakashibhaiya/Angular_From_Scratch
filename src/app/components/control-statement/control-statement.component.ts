import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-control-statement',
  imports: [FormsModule],
  templateUrl: './control-statement.component.html',
  styleUrl: './control-statement.component.css'
})
export class ControlStatementComponent {
    divVisible: boolean = true;
    isChecked: boolean = true;
    dayName: string = "";
    cityList: string[] = ["New York", "New Jersey", "New Mexico", "New Hampshire"];

    hideshowDiv1(isShow: boolean) {
      this.divVisible = isShow;
    }
}
