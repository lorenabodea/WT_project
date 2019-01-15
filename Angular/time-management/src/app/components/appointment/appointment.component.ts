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
  editAppointment: boolean = false;
  selectedRowIndex = -1;

  newArray: any = [];
  finalList = [];

  constructor(private appointmentService: AppointmentService) { }

  ngOnInit() {
    this.refreshAppointment();
  }

  refreshAppointment() {
    this.appointmentService.getAppointment().subscribe((res) => {
      this.extractAppointment(res);
      console.log(res);
    });
  }

  extractAppointment(res) {
    this.appointmentList = res;
    console.log(res);
  }

  selectIdAppointment(appointment) {
    this.id = appointment.id;
  }



  onEdit(rowIndex) {
    this.editAppointment = true;
    this.selectedRowIndex = rowIndex;
  }

  onCancel() {
    location.reload();
    this.editAppointment = false;
    this.selectedRowIndex = -1;
  }

  onSave(appointment) {
    this.appointmentService.updateAppointment(appointment.id).toPromise().then(res => {
    });
    this.editAppointment = false;
    this.selectedRowIndex = -1;
  }




  onDelete(appointment){
    //de implementat
    if (confirm('Are you sure you want to permanently delete this Appointment?') == true) {
      this.appointmentService.deleteAppointment(appointment.id).subscribe((res) => {
        this.refreshAppointment()
        location.reload()
      })
    }
  }

  onSubmit() {
    // this.newArray.push()

  }



}
