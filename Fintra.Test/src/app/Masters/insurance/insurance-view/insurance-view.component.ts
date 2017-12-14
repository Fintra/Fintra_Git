import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { CommonDataService } from '../../../Services/common-data.service';

@Component({
  selector: 'app-insurance-view',
  templateUrl: './insurance-view.component.html',
  styleUrls: ['./insurance-view.component.css']
})
export class InsuranceViewComponent implements OnInit {

  constructor(private router: Router,private route: ActivatedRoute,private CommonDataService: CommonDataService) { }
  insurance = {};
  id: number;
  private sub:any;
  page: any;

  ngOnInit() {
    this.sub = this.route
    .queryParams
    .subscribe(params => {
      // Defaults to 0 if no query param provided.
      this.page = +params['page'] || 0;
    });
    this.insurance = this.CommonDataService.insuranceData().filter(x => x.insurerId === this.page)[0];
  }
  finalSubmitInsurance() {
    // tslint:disable-next-line:quotemark
    this.router.navigate(['/filterInsurance/tabInsurance/insuranceView']);
  }
   // tslint:disable-next-line:one-line
   saveAndExit() {
    this.router.navigate(['/dashboard']);
  }
  cancel() {
    this.router.navigate(['/dashboard']);
  }

}
