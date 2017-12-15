import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { CommonDataService } from '../../../Services/common-data.service';
@Component({
  selector: 'app-customer-view',
  templateUrl: './customer-view.component.html',
  styleUrls: ['./customer-view.component.css']
})
export class CustomerViewComponent implements OnInit {

  constructor(private router: Router,private route: ActivatedRoute,private CommonDataService: CommonDataService) { }
  id: number;
  page: any;
  disableAll: any;
  transactionMode: any;
  customer= {};

  sub = this.route.params.subscribe(params => {
    this.page = params['id'];
    this.disableAll = params['disableAll'];
  });
  ngOnInit() {
    this.transactionMode = 'create';
    if (this.page) {
      this.transactionMode = 'update';
      this.customer = this.CommonDataService.customerData().filter(x => x.customerId === this.page)[0];
      if (this.page && this.disableAll) {
        this.transactionMode = 'view';
        this.customer = this.CommonDataService.customerData().filter(x => x.customerId === this.page)[0];
      }
    }
  }

  saveAndProceed() {
    this.router.navigate(['/filterCustomer/tabCustomer/account', {transactionMode : this.transactionMode}]);
  }

  GoToNextTab() {
    this.router.navigate(['/filterCustomer/tabCustomer/account', { disableAll: this.disableAll, transactionMode: this.transactionMode}]);
  }

  saveAndExit() {
    this.router.navigate(['/dashboard']);
  }

}
