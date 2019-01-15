import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/services/company.service';
import {Company } from 'src/app/models/company';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  companiesList= [];
  id: any = 0;

  constructor(private companyService: CompanyService) { }

  ngOnInit() {
    this.refreshCompany();
  }


  refreshCompany() {
    this.companyService.getCompany().subscribe((res) => {
      this.extractCompany(res);
      console.log(res);
    });
  }

  extractCompany(res) {
    this.companiesList = res;
    console.log(res);
  }

  selectIdCompany(company) {
    this.id = company.id;
  }

}
