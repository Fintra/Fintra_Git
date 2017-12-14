import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { CommonDataService } from '../../../Services/common-data.service';

@Component({
  selector: 'app-countrycode-view',
  templateUrl: './countrycode-view.component.html',
  styleUrls: ['./countrycode-view.component.css']
})
export class CountrycodeViewComponent implements OnInit {

  constructor(private router: Router,private route: ActivatedRoute,private CommonDataService: CommonDataService) { }
  country = {};
  id: number;
  private sub:any;
  page: any;

  ngOnInit() {
    this.sub = this.route
    .params
    .subscribe(params => {
      // Defaults to 0 if no query param provided.
      this.page = params['id'];
    });
    this.country = this.CommonDataService.countryCodeData().filter(x => x.countryCode === this.page)[0];
  }

  cancel() {
    this.router.navigate(['/dashboard']);
  }
}
