import { Component, OnInit } from '@angular/core';
import { CommonDataService } from '../../../Services/common-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-filter-countrycode',
  templateUrl: './filter-countrycode.component.html',
  styleUrls: ['./filter-countrycode.component.css']
})
export class FilterCountrycodeComponent implements OnInit {

  constructor(private CommonDataService: CommonDataService, private router: Router) { }
  search = {};
  countrys = {};
  defaultPage = true;
  selectedItem = null;
  recordsPerPage = 10;
  noOfPages = 0;
  currentPage = 0;

  ngOnInit() {
    this.countrys = this.CommonDataService.countryCodeData();
  }
  numberOfPages() {
    return Math.ceil(this.CommonDataService.countryCodeData().length / this.recordsPerPage);
  }
  open = function (item) {
    this.selectedItem = item.countryCode;
  };
  viewCountrycode(selectedItem) {
    this.defaultPage = false;
    this.router.navigate(['filterCountrycode/tabCountrycode/countryCodeView',{id:selectedItem}]);
    
  }
}
