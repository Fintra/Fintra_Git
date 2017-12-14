import { Component, OnInit } from '@angular/core';
import { CommonDataService } from '../../../Services/common-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-filter-insurance',
  templateUrl: './filter-insurance.component.html',
  styleUrls: ['./filter-insurance.component.css']
})
export class FilterInsuranceComponent implements OnInit {

  constructor(private CommonDataService: CommonDataService,private router: Router) { }

    search = {};
  insurance= {};
  defaultPage = true;
  selectedItem = null;
  recordsPerPage = 10;
  noOfPages = 0;
  currentPage = 0;

  ngOnInit() {
    this.insurance = this.CommonDataService.insuranceData();
  }
  numberOfPages() {
    return Math.ceil(this.CommonDataService.insuranceData().length / this.recordsPerPage);
  }
  open = function(item) {
    this.selectedItem = item.insurerId;
};
createInsurer() {
  this.defaultPage = false;
}
updateInsurer() {
  this.defaultPage = false;
}


}
