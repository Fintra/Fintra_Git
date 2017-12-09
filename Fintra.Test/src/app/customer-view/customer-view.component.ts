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
  // defaultPage = true; 
  saveAndProceed() {
    // this.defaultPage = false;
    // tslint:disable-next-line:quotemark
    alert("enter or not ");
    this.router.navigate(['/filterCustomer/tabCustomer/account']);
    // $('li').children("a[ui-sref='." + nextTab + "']").parent().addClass("active");
  }
  saveAndExit(){
    this.router.navigate(['/dashboard']);
  }

}
