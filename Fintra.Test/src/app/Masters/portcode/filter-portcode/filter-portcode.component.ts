import { Component, OnInit } from '@angular/core';
import { CommonDataService } from '../../../Services/common-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-filter-portcode',
  templateUrl: './filter-portcode.component.html',
  styleUrls: ['./filter-portcode.component.css']
})
export class FilterPortcodeComponent implements OnInit {

  constructor(private CommonDataService: CommonDataService,private router: Router) { }
  search = {};
  portcodes= {};
  defaultPage = true;
  selectedItem = null;
  recordsPerPage = 10;
  noOfPages = 0;
  currentPage = 0;

  ngOnInit() {
    this.portcodes = this.CommonDataService.portcodeData();
  }
  numberOfPages() {
    return Math.ceil(this.CommonDataService.portcodeData().length / this.recordsPerPage);
  }
  open = function(item) {
    this.selectedItem = item.portCode;
};
createPortcode() {
  this.defaultPage = false;
}
updatePortcode() {
  this.defaultPage = false;
}

}
