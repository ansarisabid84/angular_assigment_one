import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignmentOne';

  data1: any;
  data2: any;
  getdata(childCompData: any, whichField: any) {
    if (whichField === 1) {
      this.data1 = childCompData;
    } else {
      this.data2 = childCompData;
    }
  }
}
