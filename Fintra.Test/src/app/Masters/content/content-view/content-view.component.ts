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

  constructor(private router: Router,private route: ActivatedRoute,private CommonDataService: CommonDataService) { }
  content={};
  id: number;
  private sub: any;
  page: any;

  ngOnInit() {
    this.sub = this.route.params
    .subscribe(params => {
      this.page = params['id'];
    });
    if (this.page) {
      this.content = this.CommonDataService.contentData().filter(x => x.contentModule === this.page)[0];
    }
  }

  finalSubmitContent() {
    this.router.navigate(['/filterContent/tabContent/contentResult']);
  }
  saveAndExit() {
    this.router.navigate(['/dashboard']);
  }


}
