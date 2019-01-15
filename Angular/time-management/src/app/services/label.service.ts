import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '../../../node_modules/@angular/common/http';
import { environment } from '../../environments/environment';
import { Label } from "src/app/models/label"


@Injectable({
  providedIn: 'root'
})
export class LabelService {
  baseURL = environment.rootURL + `/labels`;

  constructor(private http: HttpClient) { }



  getLabel() {
    return this.http.get(this.baseURL + `/get`);
  }

  postLabel(label: Label) {
    return this.http.post(this.baseURL + "/create", label);
  }

  updateLabel(id: number){

    return this.http.put(this.baseURL + "/update" + `/${id}`);
  }

  deleteLabel(id: number){
    return this.http.delete(this.baseURL + `/delete`  + `/${id}`);
  }

}
