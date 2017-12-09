import { Component, OnInit } from '@angular/core';
import { CustomerDataService } from '../../customer-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-filtercustomer',
  templateUrl: './filterCustomer.component.html',
  styleUrls: ['./filterCustomer.component.css', '../../../stylesheets/custom.css']
})
export class FilterCustomerComponent implements OnInit {
  // tslint:disable-next-line:no-shadowed-variable
  constructor(private CustomerDataService: CustomerDataService, private router: Router) {}
  customer1 = [];
  defaultPage = true;
  create = () => {
   this.defaultPage = false;
  }

  ngOnInit() {
      this.customer1 = this.CustomerDataService.cars;
    }
}
