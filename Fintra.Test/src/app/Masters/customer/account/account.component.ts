import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  constructor(private router: Router) {}
  customer= {};
  defaultPage = true;
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
