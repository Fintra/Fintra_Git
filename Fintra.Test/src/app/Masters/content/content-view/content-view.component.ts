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
    this.sub = this.route
    .queryParams
    .subscribe(params => {
      // Defaults to 0 if no query param provided.
      this.page = +params['page'] || 0;
    });
    this.content = this.CommonDataService.contentData().filter(x => x.contentModule === this.page)[0];
  }
  // tslint:disable-next-line:member-ordering
  finalSubmitContent() {
    // tslint:disable-next-line:quotemark
    this.router.navigate(['/filterContent/tabContent/contentView']);
  }
  // tslint:disable-next-line:one-line
  saveAndExit(){
    this.router.navigate(['/dashboard']);
  }


}
