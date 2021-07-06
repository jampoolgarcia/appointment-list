import { Component } from '@angular/core';
import { AppointmentI } from './model/appointment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  public recordList: AppointmentI[] = [];

  addRecord(record: AppointmentI){
    this.recordList.push(record);
  }
  

}
