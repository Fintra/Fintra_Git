// tslint:disable-next-line:max-line-length
import { Component, ElementRef, Directive, Input, Output, ViewChildren, QueryList, ContentChildren, EventEmitter, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ServicesService } from '../../Services/services.service';

@Component({
  selector: 'app-commodity',
  templateUrl: './commodity.component.html',
  styleUrls: ['./commodity.component.css']
})

export class CommodityComponent implements OnInit {
 transactionMode: string;
  showEditView = true;
  constructor(private servicesService: ServicesService) {
    console.log('asasdasdasdasd');
   }

  createCommodity = function(){
    this.showEditView = false;
    this.servicesService.sendActionToPerform('create');
  };

  ngOnInit() {
    // this.servicesService.currentMessage.subscribe(transactionMode=>this.transactionMode = transactionMode)
  }
}

@Component({
  selector: 'app-commodity-1',
  templateUrl: './filter-commodity/filter-commodity.component.html',
  styleUrls: ['./commodity.component.css']
})

export class FilterCommodityComponent implements OnInit {
  transactionMode: string;
  transactionCmd: string;
  tab1: boolean;
  tab2: boolean;
  commodity = {commodityDescription : ''};
  constructor(private servicesService: ServicesService) {}

  showTabPage1() {
    this.tab1 = true;
  }

  finalSubmitCommodity (data): void {
    console.log('data is', data);
  }

  ngOnInit() {
    this.servicesService.Message.subscribe(transactionMode => this.transactionMode = transactionMode);
    this.transactionCmd = this.transactionMode;
    this.tab1 = true;
  }

}

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: 'tab-commodity'
})

// tslint:disable-next-line:directive-class-suffix
export class TabCommodity implements OnInit {
  message: string;
  constructor(element: ElementRef) {
    console.log('element', element);
  }

   ngOnInit() {

  }
}


