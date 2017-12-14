import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { $ } from 'protractor';

@Component({
  selector: 'app-counter-party-view',
  templateUrl: './counter-party-view.component.html',
  styleUrls: ['./counter-party-view.component.css']
})
export class CounterPartyViewComponent implements OnInit {

  constructor(private router: Router) { }
  counterparty = {};

  ngOnInit() {
  }
  finalSubmitCounterparty() {
    this.router.navigate(['/filterCounterParty/tabCounterParty/counterPartyResult']);
  }
  saveAndExit(){
    this.router.navigate(['/dashboard']);
  }

}
