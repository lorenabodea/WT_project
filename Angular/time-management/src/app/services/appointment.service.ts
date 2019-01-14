import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '../../../node_modules/@angular/common/http';
import { environment } from '../../environments/environment';
import { Appointment } from "src/app/models/appointment"


@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  
  baseURL = environment.rootURL + `/appointments`;

  constructor(private http: HttpClient) { }


  
  getAppointment() {
    return this.http.get(this.baseURL + `/get`);
  }

  create(appointment: Appointment) {
    return this.http.post(this.baseURL + "/create", appointment);
  }


  deleteAppointment(id: number){
    return this.http.delete(this.baseURL + `/delete`  + `/${id}`);
  }

}
