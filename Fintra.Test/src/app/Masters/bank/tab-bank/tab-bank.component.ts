import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-tab-bank',
  templateUrl: './tab-bank.component.html',
  styleUrls: ['./tab-bank.component.css']
})
export class TabBankComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
