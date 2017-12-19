import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { CommonDataService } from '../../../Services/common-data.service';
import { HttpClient } from '@angular/common/http';
import { ItemsResponse } from '../../../Interfaces/item-response';

@Component({
  selector: 'app-content-view',
  templateUrl: './content-view.component.html',
  styleUrls: ['./content-view.component.css']
})
export class ContentViewComponent implements OnInit {

  // tslint:disable-next-line:max-line-length no-shadowed-variable
  constructor(private router: Router, private route: ActivatedRoute, private CommonDataService: CommonDataService, private http: HttpClient) {
  }
  content= {trxnStatus: 'Confirm'};
  id: number;
  page: any;
  disableAll: any;
  transactionMode: any;

  sub = this.route.params.subscribe(params => {
    this.page = params['id'];
    this.disableAll = params['disableAll'];
  });

  ngOnInit() {
    this.transactionMode = 'create';
    if (this.page) {
      this.transactionMode = 'update';
      this.http.get<ItemsResponse>('https://localhost:3000/mastersContents/entries1?id=' + this.page).subscribe(payload => {
      this.content = payload.data;
    });
  }
  if (this.page && this.disableAll) {
        this.transactionMode = 'view';
        this.http.get<ItemsResponse>('https://localhost:3000/mastersContents/entries1?id=' + this.page).subscribe(payload => {
          this.content = payload.data;
      });
    }
  }

  finalSubmitContent() {
    if (this.transactionMode === 'create') {
      console.log('I am in create');
    this.http.post('https://localhost:3000/mastersContents/entries', this.content).subscribe(response => {
      console.log('response is', response);
    }, error => {
      console.log('error is', error);
    });
  }
  if (this.transactionMode === 'update') {
    console.log('I am in update');
    this.http.put('https://localhost:3000/mastersContents/entries?id=' + this.page, this.content).subscribe(response => {
      console.log('response is', response);
    }, error => {
      console.log('error is', error);
    });
  }
    this.router.navigate(['/filterContent/tabContent/contentResult']);
  }
  saveAndExit() {
    this.router.navigate(['/dashboard']);
  }
}
