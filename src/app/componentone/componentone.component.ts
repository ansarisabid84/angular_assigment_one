import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-componentone',
  templateUrl: './componentone.component.html',
  styleUrls: ['./componentone.component.css'],
  inputs: ["inputField1"],
  outputs:["child1EventEmitter"]
})
export class ComponentoneComponent {
  inputField1:any;
  child1EventEmitter = new EventEmitter();

  passToParent(childCompData: any) {
    this.child1EventEmitter.emit(childCompData);
  }

}
