import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { CommonDataService } from '../../../Services/common-data.service';

@Component({
  selector: 'app-document-view',
  templateUrl: './document-view.component.html',
  styleUrls: ['./document-view.component.css']
})
export class DocumentViewComponent implements OnInit {

  constructor(private router: Router,private route: ActivatedRoute,private CommonDataService: CommonDataService) { }
  document = {};
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
    this.document = this.CommonDataService.documentData().filter(x => x.documentId === this.page)[0];
  }
  // tslint:disable-next-line:member-ordering
  finalSubmitDocument() {
    // tslint:disable-next-line:quotemark
    this.router.navigate(['/filterDocument/tabDocument/documentView']);
  }
  // tslint:disable-next-line:one-line
  saveAndExit() {
    this.router.navigate(['/dashboard']);
  }
  cancel() {
    this.router.navigate(['/dashboard']);
  }
}
