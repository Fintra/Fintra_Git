import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { CommonDataService } from '../../../Services/common-data.service';

@Component({
  selector: 'app-content-view',
  templateUrl: './content-view.component.html',
  styleUrls: ['./content-view.component.css']
})
export class ContentViewComponent implements OnInit {

  constructor(private router: Router,private route: ActivatedRoute,private CommonDataService: CommonDataService) {
    console.log('when first');
  }
  content= {};
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
      this.content = this.CommonDataService.contentData().filter(x => x.contentName === this.page)[0];
      if (this.page && this.disableAll) {
        this.transactionMode = 'view';
        this.content = this.CommonDataService.contentData().filter(x => x.contentName === this.page)[0];
      }
    }
    // else if (this.disableAll) {
    //   this.transactionMode = 'view';
    //   this.content = this.CommonDataService.contentData().filter(x => x.contentName === this.page)[0];
    // }
  }

  finalSubmitContent() {
    this.router.navigate(['/filterContent/tabContent/contentResult']);
  }
  saveAndExit() {
    this.router.navigate(['/dashboard']);
  }


}
