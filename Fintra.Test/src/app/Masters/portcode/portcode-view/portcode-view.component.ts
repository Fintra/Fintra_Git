import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { CommonDataService } from '../../../Services/common-data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidationService } from '../../../../app/validation.service';

@Component({
  selector: 'app-portcode-view',
  templateUrl: './portcode-view.component.html',
  styleUrls: ['./portcode-view.component.css']
})
export class PortcodeViewComponent implements OnInit {
  portcode_form: any;
  constructor(private router: Router,private route: ActivatedRoute,private CommonDataService: CommonDataService, private formBuilder: FormBuilder) {
    this.portcode_form = this.formBuilder.group({
      'portCode': [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(20)])],
      'portcodeName': [null, Validators.required],
      'portcodeAddress1': [null, Validators.required],
      'portcodeAddress2': [null, Validators.required],
      'portcodeAddress3': [null, Validators.required],
    });
    console.log(this.portcode_form);
   }
  portcode = {};
  id: number;
  private sub:any;
  page: any;

  ngOnInit() {
// validations

  // ======================
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
    console.log("this.portcode_form.value.portCode",this.portcode_form.value.portCode);
    // if (this.portcode_form.dirty && this.portcode_form.valid) {
    //   alert(`portCode: ${this.portcode_form.value.portCode}`);
    // }
    // // tslint:disable-next-line:quotemark
    this.router.navigate(['/filterPortcode/tabPortcode/portcodeResult']);
  }
  // tslint:disable-next-line:one-line
  saveAndExit() {
    this.router.navigate(['/dashboard']);
  }
  cancel() {
    this.router.navigate(['/dashboard']);
  }
}
