import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  imports: [],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.css'
})
export class SignalComponent {
   firstName = signal('chetan');
   lastName = signal<string>('Singh');
   courseName:string = 'Angular';
   rollNo = signal<number>(101);

   constructor(){
    
    setTimeout(() => {
       debugger;
       this.courseName = 'React';
       this.firstName.set('John');
       debugger;
    }, 2000);
   }

   onIncreament(){
    this.rollNo.update(prev => prev+1);
     }

}
