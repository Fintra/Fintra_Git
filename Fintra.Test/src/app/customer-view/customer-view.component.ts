import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { $ } from 'protractor';

@Component({
  selector: 'app-customer-view',
  templateUrl: './customer-view.component.html',
  styleUrls: ['./customer-view.component.css']
})
export class CustomerViewComponent implements OnInit {

  constructor(private router: Router) { }
  customer= {};
  ngOnInit() {
  }
  // tslint:disable-next-line:member-ordering
  saveAndProceed() {
    // tslint:disable-next-line:quotemark
    this.router.navigate(['/filterCustomer/tabCustomer/account']);
  }
  // tslint:disable-next-line:one-line
  saveAndExit(){
    this.router.navigate(['/dashboard']);
  }

}
