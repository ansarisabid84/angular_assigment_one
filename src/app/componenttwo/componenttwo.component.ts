import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-componenttwo',
  templateUrl: './componenttwo.component.html',
  styleUrls: ['./componenttwo.component.css'],
  inputs: ["inputField2"],
  outputs:["child2EventEmitter"]
})
export class ComponenttwoComponent {
  inputField2:any;
  child2EventEmitter = new EventEmitter();

  passToParent(childCompData: any) {
    this.child2EventEmitter.emit(childCompData);
  }

}
