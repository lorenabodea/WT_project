import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '../../../node_modules/@angular/common/http';
import { environment } from '../../environments/environment';
import { Label } from "src/app/models/label"


@Injectable({
  providedIn: 'root'
})
export class LabelService {
  baseURL = environment.rootURL + `/labels`;

  constructor() { }


  
  // getLabel() {
  //   return this.http.get(this.baseURL + `/get`);
  // }

  // create(label: Label) {
  //   return this.http.post(this.baseURL + "/create", label);
  // }

  // updateLabel(label: Label){
    
  //   return this.http.put(this.baseURL + "/update", label);
  // }


}
