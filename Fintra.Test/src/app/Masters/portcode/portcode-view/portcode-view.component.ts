import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { CommonDataService } from '../../../Services/common-data.service';

@Component({
  selector: 'app-portcode-view',
  templateUrl: './portcode-view.component.html',
  styleUrls: ['./portcode-view.component.css']
})
export class PortcodeViewComponent implements OnInit {

  constructor(private router: Router,private route: ActivatedRoute,private CommonDataService: CommonDataService) { }
  portcode = {};
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
    this.portcode = this.CommonDataService.portcodeData().filter(x => x.portCode === this.page)[0];
  }
  // tslint:disable-next-line:member-ordering
  finalSubmitPortcode() {
    // tslint:disable-next-line:quotemark
    this.router.navigate(['/filterPortcode/tabPortcode/portcodeView']);
  }
  // tslint:disable-next-line:one-line
  saveAndExit() {
    this.router.navigate(['/dashboard']);
  }
  cancel() {
    this.router.navigate(['/dashboard']);
  }
}
