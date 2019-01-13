import { Component, OnInit } from '@angular/core';
import {AppointmentService } from 'src/app/services/appointment.service';
import {Appointment } from 'src/app/models/appointment';
@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {

  appointmentList = [];
  id: any = 0;
  deleteAppointment: boolean = false;
  selectedRowIndex = -1;
  
  constructor(private appointmentService: AppointmentService) { }

  ngOnInit() {
    // this.refreshAppointment();
  }

  refreshAppointment() {
    // this.appointmentService.getAppointment().subscribe((res) => {
    //   this.extractAppointment(res);
    // });
  }

  extractAppointment(res) {
    this.appointmentList = res;
  }

  selectIdAppointment(appointment) {
    this.id = appointment.id;
  }


  onDelete(appointment){
    //de implementat

  }

}

