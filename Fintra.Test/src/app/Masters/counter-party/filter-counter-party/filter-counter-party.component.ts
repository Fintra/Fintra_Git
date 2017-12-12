import { Component, OnInit } from '@angular/core';
import { CommonDataService } from '../../../Services/common-data.service';


@Component({
  selector: 'app-filter-counter-party',
  templateUrl: './filter-counter-party.component.html',
  styleUrls: ['./filter-counter-party.component.css']
})
export class FilterCounterPartyComponent implements OnInit {

  constructor(private CommonDataService: CommonDataService) { }
  search = {};
  counters = {};
  defaultPage = true;
  selectedItem = null;
  recordsPerPage = 2;
  noOfPages = 0;
  currentPage = 0;
  // search = {
  //   // counterpartyId: ''
  // };
  createCounterparty = () => {
   this.defaultPage = false;
   console.log('this.selectedItem', this.selectedItem);
  }
  ngOnInit() {
    this.counters = this.CommonDataService.counterPartyData();
  }

  numberOfPages() {
    return Math.ceil(this.CommonDataService.counterPartyData().length / this.recordsPerPage);
  }
  open = function(item) {
    this.selectedItem = item.counterpartyId;
};

}
