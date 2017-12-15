import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  constructor(private router: Router,private route: ActivatedRoute) {}
  customer= {};
  defaultPage = true;
  disableAll: any;
  transactionMode: any;
  page: any;

  sub = this.route.params.subscribe(params => {
    // this.page = params['id'];
    this.transactionMode = params['transactionMode'];
    this.disableAll = params['disableAll'];
  });

  ngOnInit() {
  }
  saveAndExit() {
    this.router.navigate(['/dashboard']);
  }
  cancel() {
    this.router.navigate(['/dashboard']);
  }
  finalSubmitCustomer() {
    this.router.navigate(['/filterCustomer/tabCustomer/customerResult']);
  }

}
