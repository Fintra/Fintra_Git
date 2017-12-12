import { Component, OnInit } from '@angular/core';
import { CommonDataService } from '../../../Services/common-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-filtercustomer',
  templateUrl: './filterCustomer.component.html',
  styleUrls: ['./filterCustomer.component.css', '../../../../stylesheets/custom.css']
})
export class FilterCustomerComponent implements OnInit {
  // tslint:disable-next-line:no-shadowed-variable
  constructor(private CommonDataService: CommonDataService, private router: Router) {}
  customer = [];
  defaultPage = true;
  selectedItem = null;
  // recordsPerPage = 10;
  // noOfPages = 0;
  // currentPage = 0;
  create = () => {
   this.defaultPage = false;
  }

  ngOnInit() {
      // this.customer = this.CommonDataService.cars;
      // tslint:disable-next-line:quotemark
      // console.log('this.CommonDataService.myData();', this.CommonDataService.myData());
      this.customer = this.CommonDataService.customerData();
    }

    open3 = function(item) {
      console.log('view filter', item);
      this.selectedItem = item.customerId;
    };

    // myData(){

    // }
}
