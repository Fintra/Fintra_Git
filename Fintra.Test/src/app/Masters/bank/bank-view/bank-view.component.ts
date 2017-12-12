import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import { CommonDataService } from '../../../Services/common-data.service';

@Component({
  selector: 'app-bank-view',
  templateUrl: './bank-view.component.html',
  styleUrls: ['./bank-view.component.css']
})
export class BankViewComponent implements OnInit {
  public selectedIDE: string;
  public selectedIDE1: any;
  public observerRef: any;
  public bank: any;
  defaultPage = true;
  defaultPage1 = true;

  constructor(
    private commonDataService: CommonDataService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.observerRef = route.params.subscribe(params => {
      this.selectedIDE = params['id'];
      this.selectedIDE1 = this.commonDataService
        .bankData()
        .filter(x => x.bankId === this.selectedIDE);
      this.bank = this.selectedIDE1[0];
    });
  }

  ngOnInit() {}

  finish = () => {
    this.defaultPage = false;
    this.router.navigate(['bankFilterM/bankTabM/bankViewM/bankResult']);
  }
}
