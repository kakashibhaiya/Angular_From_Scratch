import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
   
  firstName: string = "CHetan";
  rollno: number = 21;
  isActive: boolean = true;
  currentDate: Date = new Date();
  myPlaceholder: string = " Enter your name";
  div1Class: string ="bg-primary";
  selectedCity: string = "";
  
  constructor() {
    console.log(this.firstName);

    this.isActive = false;
    console.log(this.isActive);
  }

  showWelcome() {
    alert("Welcome to Angular");
  }

  onChangeCity(){
    alert("City Changed");
  }

}