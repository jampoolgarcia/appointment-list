// core modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// root component
import { AppComponent } from './app.component';

// components
import { FormAppointmentComponent } from './components/form-appointment/form-appointment.component';
import { ListAppointmentComponent } from './components/list-appointment/list-appointment.component';

@NgModule({
  declarations: [
    // root
    AppComponent,

    // components
    FormAppointmentComponent,
    ListAppointmentComponent,
  ],
  imports: [
    // core
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
