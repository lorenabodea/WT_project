import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '../../../node_modules/@angular/common/http';
import { environment } from '../../environments/environment';
import { Company } from "src/app/models/company"

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  baseURL = environment.rootURL + `/companies`;

  constructor(private http: HttpClient) { }

  getCompany() {
    return this.http.get(this.baseURL + `/get`);
  }
}
