import { Component, linkedSignal, signal } from '@angular/core';

@Component({
  selector: 'app-linked-signal',
  imports: [],
  templateUrl: './linked-signal.component.html',
  styleUrl: './linked-signal.component.css'
})
export class LinkedSignalComponent {
   firstName = signal("chetan");
   lastName = signal("singh");

   fullName = linkedSignal({
    source: this.firstName,
    computation: (newVal, oldVal) => {
      const fullName = newVal + " " + this.lastName();
      return fullName;
    }
   })

   user = signal({id:111, name:"chetan"});

   email = linkedSignal({
    source: this.user,
    computation: user => `${user.name+user.id}@gmail.com`,
    equal: (a:any, b:any) => a.id !== b.id
   })

   changeName(){
    this.firstName.set("John");
   }

   changeId(){
    debugger;
    this.user.set({id:222, name:"chetan"});
   }
}
