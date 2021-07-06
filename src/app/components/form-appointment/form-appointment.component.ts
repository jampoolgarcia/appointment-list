import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AppointmentI } from 'src/app/model/appointment';

@Component({
  selector: 'app-form-appointment',
  templateUrl: './form-appointment.component.html',
  styles: [
  ]
})
export class FormAppointmentComponent implements OnInit {

  public record!: AppointmentI;
  
  @Output() addEmitter = new EventEmitter<AppointmentI>();

  constructor() { 
    this.defaultData();
  }

  ngOnInit(): void {
  }

  defaultData(){
    this.record = {
      name: '',
      date: '',
      hour: '',
      symptom: ''
    }
  }

  onSubmit(){
    this.addEmitter.emit(this.record);
    this.defaultData();
  }

}
