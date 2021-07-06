import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AppointmentI } from 'src/app/model/appointment';

@Component({
  selector: 'app-list-appointment',
  templateUrl: './list-appointment.component.html',
  styles: [
  ]
})
export class ListAppointmentComponent implements OnInit {

  @Input() record!: AppointmentI;
  @Input() index!: number;

  @Output() deleteEmitter = new EventEmitter<number>();
   
  constructor() { }

  ngOnInit(): void {
  }

  onDelete(){
    this.deleteEmitter.emit(this.index);
  }

}
