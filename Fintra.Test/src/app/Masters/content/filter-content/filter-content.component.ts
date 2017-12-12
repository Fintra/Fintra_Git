import { Component, OnInit } from '@angular/core';
import { CommonDataService } from '../../../Services/common-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-filter-content',
  templateUrl: './filter-content.component.html',
  styleUrls: ['./filter-content.component.css']
})
export class FilterContentComponent implements OnInit {

  // tslint:disable-next-line:no-shadowed-variable
  constructor(private CommonDataService: CommonDataService,private router: Router) { }
  search = {};
  contents= {};
  defaultPage = true;
  selectedItem = null;
  recordsPerPage = 10;
  noOfPages = 0;
  currentPage = 0;
  // selectedItem1={};

  ngOnInit() {
    this.contents = this.CommonDataService.contentData();
  }

numberOfPages() {
    return Math.ceil(this.CommonDataService.contentData().length / this.recordsPerPage);
  }
  open = function(item) {
    this.selectedItem = item.contentModule;
};
createContent() {
  this.defaultPage = false;
}
}
