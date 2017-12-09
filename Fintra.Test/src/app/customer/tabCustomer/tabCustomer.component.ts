import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabcustomer',
  templateUrl: './tabCustomer.component.html',
  styleUrls: ['./tabCustomer.component.css']
})
export class TabCustomerComponent implements OnInit {

  ngOnInit(): void {
  }
  constructor(private router: Router) { }

  // tslint:disable-next-line:member-ordering
  customer = {};

  // tslint:disable-next-line:member-ordering
  sideMenuOpened = true;

}
