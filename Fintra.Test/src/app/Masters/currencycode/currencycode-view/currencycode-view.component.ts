import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { CommonDataService } from '../../../Services/common-data.service';

@Component({
  selector: 'app-currencycode-view',
  templateUrl: './currencycode-view.component.html',
  styleUrls: ['./currencycode-view.component.css']
})
export class CurrencycodeViewComponent implements OnInit {

  constructor(private router:Router,private route:ActivatedRoute,private CommonDataService:CommonDataService) { }
  currency = {};
  id:number;
  private sub:any;
  page:any;

  ngOnInit() {
    this.sub = this.route
    .params.subscribe(params => {
      this.page = params['id'];
    });
    this.currency = 
    this.CommonDataService.currencyCodeData().filter(x => x.currencyCode === this.page)[0];
  }

cancel(){
  this.router.navigate(['/dashboard']);
}
}
