import { Injectable } from '@angular/core';

@Injectable()
export class CommonDataService {

  constructor() { }
  data = [];

  customerData() {
   return this.data = [
      {customerId: 1, customerName: 'saa', contactName1: 'ddd'}
    ];
  }
  counterPartyData() {
   return this.data = [
    {counterpartyId: 1, counterpartyName: 'gopal', counterpartyAddress1: 'ddd'},
    {counterpartyId: 2, counterpartyName: 'vishnu', counterpartyAddress1: 'ddd'},
    {counterpartyId: 3, counterpartyName: 'parvej', counterpartyAddress1: 'ddd'}
    ];
  }
  contentData() {
   return this.data = [
    {contentModule: 1, contentName: 'gopal1', contentDescription: 'ddd'},
    {contentModule: 2, contentName: 'gopal2', contentDescription: 'ddd'},
    {contentModule: 3, contentName: 'gopal3', contentDescription: 'ddd'},
    {contentModule: 4, contentName: 'gopal4', contentDescription: 'ddd'},
    {contentModule: 5, contentName: 'gopal5', contentDescription: 'ddd'},
    {contentModule: 6, contentName: 'gopal6', contentDescription: 'ddd'},
    {contentModule: 7, contentName: 'gopal7', contentDescription: 'ddd'},
    {contentModule: 8, contentName: 'gopal8', contentDescription: 'ddd'},
    {contentModule: 9, contentName: 'gopal9', contentDescription: 'ddd'},
    {contentModule: 10, contentName: 'gopal10', contentDescription: 'ddd'},
    {contentModule: 11, contentName: 'gopal11', contentDescription: 'ddd'},
    {contentModule: 12, contentName: 'gopal112', contentDescription: 'ddd'},
    {contentModule: 13, contentName: 'gopal13', contentDescription: 'ddd'},
    // {contentModule: '1', contentName: 'gopal1', contentDescription: 'ddd'},
    // {contentModule: '2', contentName: 'gopal2', contentDescription: 'ddd'},
    // {contentModule: '3', contentName: 'gopal3', contentDescription: 'ddd'},
    ];
  }

}
