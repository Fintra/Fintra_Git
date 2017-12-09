import { Component, OnInit } from '@angular/core';
import { CustomerdataService } from '../customerdata.service';
import { Router } from '@angular/router';
// import { Router } from '@angular/router';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor(private CustomerdataService:CustomerdataService,private router: Router) {
// console.log("'")

  }
  // a=[];
  // title1 = 'Tour of Heroes';
  
  // someProperty :string = '';
  customer1 = [];
  a= true;
    ngOnInit() {
      console.log(this.CustomerdataService.cars);
      //this.a=true;
      this.customer1= this.CustomerdataService.cars;
      console.log("enter ",this.customer1);
      // this.someProperty  = this.CustomerdataService.myData();
    }
    // createCustomer=function(){
    //   alert("ddd");
    //   this.router.navigate(['/customerView']);
    // }

}
