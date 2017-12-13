import { Component, OnInit } from '@angular/core';
import { CommonDataService } from '../../../Services/common-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-filter-document',
  templateUrl: './filter-document.component.html',
  styleUrls: ['./filter-document.component.css']
})
export class FilterDocumentComponent implements OnInit {

  constructor(private CommonDataService: CommonDataService,private router: Router) { }
  search = {};
  documents= {};
  defaultPage = true;
  selectedItem = null;
  recordsPerPage = 10;
  noOfPages = 0;
  currentPage = 0;
  
  ngOnInit() {
    this.documents = this.CommonDataService.documentData();
  }
  numberOfPages() {
    return Math.ceil(this.CommonDataService.documentData().length / this.recordsPerPage);
  }
  open = function(item) {
    this.selectedItem = item.documentId;
};
createDocument() {
  this.defaultPage = false;
}
updateDocument() {
  this.defaultPage = false;
}

}
