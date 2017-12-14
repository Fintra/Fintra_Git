import { Component, OnInit } from '@angular/core';
import { CommonDataService } from '../../../Services/common-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-filter-currencycode',
  templateUrl: './filter-currencycode.component.html',
  styleUrls: ['./filter-currencycode.component.css']
})
export class FilterCurrencycodeComponent implements OnInit {

  constructor(private CommonDataService: CommonDataService,private router:Router) { }
search = {};
currencys = {};
defaultPage = true;
selectedItem = null;
recordsPerPage = 10;
noOfPages = 0;
currentPage = 0;

  ngOnInit() {
    this.currencys = this.CommonDataService.currencyCodeData();
    console.log("currencys",this.currencys);
  }
  numberOfPages(){
    return Math.ceil(this.CommonDataService.currencyCodeData().length / this.recordsPerPage);
  }
open = function (item){
  this.selectedItem = item.currencyCode;
  console.log("item",item);
};

viewCurrencycode(selectedItem){
  this.defaultPage = false;
  this.router.navigate(['filterCurrencycode/tabCurrencycode/currencyCodeView',{id:selectedItem}]);
}
}
