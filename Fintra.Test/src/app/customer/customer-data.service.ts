import { Injectable } from '@angular/core';

@Injectable()
export class CustomerDataService {

  constructor() { }
  cars = [
    {customerId: 1, customerName: 'saa', contactName1: 'ddd'}
  ];

  myData() {
    return 'This is my data, man!';
  }

}
