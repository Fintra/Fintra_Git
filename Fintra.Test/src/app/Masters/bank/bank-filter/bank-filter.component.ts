import { Component, OnInit } from '@angular/core';
import { CommonDataService } from '../../../Services/common-data.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-bank-filter',
  templateUrl: './bank-filter.component.html',
  styleUrls: ['./bank-filter.component.css'],
  // Don't forget to add reference of DataService
  providers: [CommonDataService]
})
export class BankFilterComponent implements OnInit {
  [x: string]: any;
  constructor(
    private commonDataService: CommonDataService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  banks = {};
  bank = {};
  defaultPage = true;
  isAvailable = true;
  recordsPerPage = 5;
  noOfPages = 0;
  currentPage = 0;
  userFilter: any = { bankId: '', bankName: '', bicCode: '' };

  ngOnInit() {
    this.someProperty = this.commonDataService.bankData();
    this.banks = this.someProperty;
  }

  open = function(item) {
    this.selectedItem = item.bankId;
  };

  numberOfPages = function() {
    return Math.ceil(this.banks.length / this.recordsPerPage);
  };

  create = function(selectedItem) {
    this.defaultPage = false;
    this.router.navigate([
      'bankFilterM/bankTabM/bankViewM',
      { id: selectedItem }
    ]);
  };
}
