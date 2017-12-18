import { Component, OnInit } from '@angular/core';
import { CommonDataService } from '../../Services/common-data.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidationService } from '../../../app/validation.service';

// Portcode Filter
@Component({
  selector: 'app-filter-portcode',
  templateUrl: './portcode-views/filter-portcode.component.html',
  styleUrls: ['./portcode.component.css']
})
export class FilterPortcodeComponent implements OnInit {

  constructor(private CommonDataService: CommonDataService, private router: Router) { }
  search = {};
  portcodes = {};
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
  open = function (item) {
    this.selectedItem = item.portCode;
  };
  createPortcode() {
    this.defaultPage = false;
  }
  updatePortcode() {
    this.defaultPage = false;
  }
}
// Portcode Tab
@Component({
  selector: 'app-tab-portcode',
  templateUrl: './portcode-views/tab-portcode.component.html',
  styleUrls: ['./portcode.component.css']
})
export class TabPortcodeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
// Portcode View
@Component({
  selector: 'app-portcode-view',
  templateUrl: './portcode-views/portcode-view.component.html',
  styleUrls: ['./portcode.component.css']
})
export class PortcodeViewComponent implements OnInit {
  portcode_form: any;
  constructor(private router: Router, private route: ActivatedRoute, private CommonDataService: CommonDataService, private formBuilder: FormBuilder) {
    this.portcode_form = this.formBuilder.group({
      'portCode': [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(20)])],
      'portcodeName': [null, Validators.required],
      'portcodeAddress1': [null, Validators.required],
      'portcodeAddress2': [null, Validators.required],
      'portcodeAddress3': [null, Validators.required],
    });
    console.log(this.portcode_form);
  }
  portcode = {};
  id: number;
  private sub: any;
  page: any;

  ngOnInit() {

    this.sub = this.route
      .queryParams
      .subscribe(params => {
        // Defaults to 0 if no query param provided.
        this.page = +params['page'] || 0;
      });
    this.portcode = this.CommonDataService.portcodeData().filter(x => x.portCode === this.page)[0];
  }
  // tslint:disable-next-line:member-ordering
  finalSubmitPortcode() {
    console.log("this.portcode_form.value.portCode", this.portcode_form.value.portCode);
    // // tslint:disable-next-line:quotemark
    this.router.navigate(['/filterPortcode/tabPortcode/portcodeResult']);
  }
  // tslint:disable-next-line:one-line
  saveAndExit() {
    this.router.navigate(['/dashboard']);
  }
  cancel() {
    this.router.navigate(['/dashboard']);
  }
}
// Portcode Result
@Component({
  selector: 'app-portcode-result',
  templateUrl: './portcode-views/portcode-result.component.html',
  styleUrls: ['./portcode.component.css']
})
export class PortcodeResultComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}