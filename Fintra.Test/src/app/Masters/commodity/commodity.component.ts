import { Component, ElementRef, Directive, Input, Output, ViewChildren, QueryList, ContentChildren, EventEmitter, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-commodity',
  templateUrl: './commodity.component.html',
  styleUrls: ['./commodity.component.css']
})

export class CommodityComponent implements OnInit{
 transactionMode:string;
  showEditView = true;
  constructor(private servicesService: ServicesService) { 
    console.log("asasdasdasdasd");
   }

  createCommodity = function(){
    this.showEditView = false;
    this.servicesService.sendActionToPerform("create");  
  }
  
  ngOnInit() {
    //this.servicesService.currentMessage.subscribe(transactionMode=>this.transactionMode = transactionMode)
  }
}

@Component({
  selector: 'app-commodity-1',
  templateUrl: './filter-commodity/filter-commodity.component.html',
  styles:[`
  .tabs-left>.nav-tabs {
    border-bottom: 0;
}

.tab-content>.tab-pane,
.pill-content>.pill-pane {
    background: white;
    margin-left: 185px;
    min-height: 80vh;
    -webkit-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
}

.tab-content>.active,
.pill-content>.active {
    display: block;
}

.tabs-left>.nav-tabs>li {
    float: none;
}

.tab-content {
    background-color: white;
    margin-left: 185px;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
    /*padding-bottom: 60px;*/
}

.tabs-left>.nav-tabs>li>a {
    min-width: 74px;
    margin-right: 0;
    margin-bottom: 3px;
}

.tabs-left>.nav-tabs {
    float: left;
    margin-right: -15px;
    /*border-right: 1px solid #ddd;*/
}

.tabs-left>.nav-tabs>li>a {
    /*margin-right: -1px;
      -webkit-border-radius: 4px 0 0 4px;
         -moz-border-radius: 4px 0 0 4px;
              border-radius: 4px 0 0 4px;*/
}

.tabs-left>.nav-tabs>li>a:hover,
.tabs-left>.nav-tabs>li>a:focus {
    /*border-color: #eeeeee #dddddd #eeeeee #eeeeee;*/
}

.tabs-left>.nav-tabs .active>a,
.tabs-left>.nav-tabs .active>a:hover,
.tabs-left>.nav-tabs .active>a:focus {
    border-color: #ddd transparent #ddd #ddd;
    /**border-right-color: #ffffff;*/
    background: white;
    box-shadow: 1px 15px 10px -17px gray !important;
}

.nav-tabs>li.active>a,
.nav-tabs>li>a:hover,
.nav-tabs>li.active>a:hover,
.nav-tabs>li.active>a:focus {
    /*border: 1px solid transparent;*/
}

.nav-tabs>li.active>a,
.nav-tabs>li.active>a:focus,
.nav-tabs>li>a:hover {
    box-shadow: none;
}

.tabs-left>.nav-tabs>li>a {
    min-width: 200px;
}

.nav-tabs>li>a,
.nav-tabs>li>a:active,
.nav-tabs>li>a:focus {
    -webkit-box-shadow: none;
    box-shadow: none;
}

.nav>li>a {
    padding: 20px 20px;
}

.nav-tabs>li>a {
    -webkit-box-shadow: none !important;
    box-shadow: none !important;
}

.nav-tabs>li>a {
    border-radius: 0px;
}
  `]
})

export class FilterCommodityComponent implements OnInit {
  transactionMode:string;
  transactionCmd:string;
  tab1:boolean;
  tab2:boolean;
  commodity = {commodityDescription : ''};
  constructor(private servicesService: ServicesService) {}
  
  showTabPage1(){
    this.tab1 = true;
  };

  finalSubmitCommodity (data) : void{
    console.log("data is", data);
  };

  ngOnInit() {
    this.servicesService.Message.subscribe(transactionMode=>this.transactionMode = transactionMode)
    this.transactionCmd=this.transactionMode
    this.tab1 = true;
  }

}

@Directive({
  selector: 'tab-commodity'
})

export class TabCommodity implements OnInit{
  message:string;
  constructor(element: ElementRef) { 
    console.log("element", element);
  }
  
   ngOnInit() {
    
  }
}


