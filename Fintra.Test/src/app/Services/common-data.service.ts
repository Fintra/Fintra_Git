import { Injectable } from '@angular/core';

@Injectable()
export class CommonDataService {

  constructor() { }
  data = [];

  customerData() {
   return this.data = [
    {customerId: '1', customerName: 'saa', contactName1: 'ddd'},
    {customerId: '2', customerName: 'saa', contactName1: 'ddd'},
    {customerId: '3', customerName: 'saa', contactName1: 'ddd'},
    {customerId: '4', customerName: 'saa', contactName1: 'ddd'},
    {customerId: '5', customerName: 'saa', contactName1: 'ddd'},
    {customerId: '6', customerName: 'saa', contactName1: 'ddd'}
    ];
  }
  counterPartyData() {
   return this.data = [
    {counterpartyId: 1, counterpartyName: 'gopal', counterpartyAddress1: 'ddd'},
    {counterpartyId: 2, counterpartyName: 'vishnu', counterpartyAddress1: 'ddd'},
    {counterpartyId: 3, counterpartyName: 'parvej', counterpartyAddress1: 'ddd'},
    {counterpartyId: 4, counterpartyName: 'parvej', counterpartyAddress1: 'ddd'},
    {counterpartyId: 5, counterpartyName: 'parvej', counterpartyAddress1: 'ddd'},
    {counterpartyId: 6, counterpartyName: 'parvej', counterpartyAddress1: 'ddd'}
    ];
  }
  contentData() {
   return this.data = [
    {contentModule: 'Imports', contentName: 'gopal1', contentDescription: 'ddd'},
    {contentModule: 'Exports', contentName: 'gopal2', contentDescription: 'ddd'},
    {contentModule: 'Guarantees', contentName: 'gopal3', contentDescription: 'ddd'},
    {contentModule: 'Guarantees', contentName: 'gopal4', contentDescription: 'ddd'},
    {contentModule: 'Guarantees', contentName: 'gopal5', contentDescription: 'ddd'},
    {contentModule: 'Exports', contentName: 'gopal6', contentDescription: 'ddd'},
    {contentModule: 'Exports', contentName: 'gopal7', contentDescription: 'ddd'},
    {contentModule: 'Exports', contentName: 'gopal8', contentDescription: 'ddd'},
    {contentModule: 'Imports', contentName: 'gopal9', contentDescription: 'ddd'},
    {contentModule: 'Imports', contentName: 'gopal10', contentDescription: 'ddd'},
    {contentModule: 'Imports', contentName: 'gopal11', contentDescription: 'ddd'},
    {contentModule: 'Imports', contentName: 'gopal112', contentDescription: 'ddd'},
    {contentModule: 'Imports', contentName: 'gopal13', contentDescription: 'ddd'},
    ];
  }
  bankData() {
    return this.data  = [
    {bankId: 'SBIMUMBAI11',
    bicCode: 'SBININ123',
    bankName: 'STATE BANK OF INDIA',
    // correspondent: '1',
    nostroAcNumber: '987654098',
    bankAddress1: 'NO.21 MADAME CAMA ROAD',
    bankAddress2: 'NARIMAN POINT',
    bankAddress3: 'MUMBAI INDIA 400021',
    importLc: '90000000',
    exportLc: '800000',
    guarantee: '700000000',
   },
   {bankId: 'SBIMUMBAI22',
   bicCode: 'SBININ145',
   bankName: 'STATE BANK OF INDIA',
   // correspondent: '1',
   nostroAcNumber: '98765434',
   bankAddress1: 'NO.21 MADAME CAMA ROAD',
   bankAddress2: 'NARIMAN POINT',
   bankAddress3: 'MUMBAI INDIA 400021',
   importLc: '90000000',
   exportLc: '800000',
   guarantee: '700000000',
  },
  {bankId: 'HGHGHGHGH',
  bicCode: 'SBININ145',
  bankName: 'BANK OF INDIA',
  // correspondent: '1',
  nostroAcNumber: '98765434',
  bankAddress1: 'NO.21 MADAME CAMA ROAD',
  bankAddress2: 'NARIMAN POINT',
  bankAddress3: 'MUMBAI INDIA 400021',
  importLc: '90000000',
  exportLc: '800000',
  guarantee: '700000000',
 },
 {bankId: '1222OPOOIIO',
 bicCode: 'union145',
 bankName: 'unionNGGH',
 // correspondent: '1',
 nostroAcNumber: '98765434',
 bankAddress1: 'NO.21 MADAME CAMA ROAD',
 bankAddress2: 'NARIMAN POINT',
 bankAddress3: 'MUMBAI INDIA 400021',
 importLc: '90000000',
 exportLc: '800000',
 guarantee: '700000000',
},
{bankId: '1222UIUIJK',
bicCode: 'union145',
bankName: 'unionJHJH',
// correspondent: '1',
nostroAcNumber: '98765434',
bankAddress1: 'NO.21 MADAME CAMA ROAD',
bankAddress2: 'NARIMAN POINT',
bankAddress3: 'MUMBAI INDIA 400021',
importLc: '90000000',
exportLc: '800000',
guarantee: '700000000',
},
{bankId: '122WEDFDF2',
bicCode: 'union145',
bankName: 'unionJHJH',
// correspondent: '1',
nostroAcNumber: '98765434',
bankAddress1: 'NO.21 MADAME CAMA ROAD',
bankAddress2: 'NARIMAN POINT',
bankAddress3: 'MUMBAI INDIA 400021',
importLc: '90000000',
exportLc: '800000',
guarantee: '700000000',
},
{bankId: '122ASWEEE',
bicCode: 'union145',
bankName: 'unionUYUYJ',
// correspondent: '1',
nostroAcNumber: '98765434',
bankAddress1: 'NO.21 MADAME CAMA ROAD',
bankAddress2: 'NARIMAN POINT',
bankAddress3: 'MUMBAI INDIA 400021',
importLc: '90000000',
exportLc: '800000',
guarantee: '700000000',
},
{bankId: '1222DFDFDF',
bicCode: 'union145',
bankName: 'unio5n',
// correspondent: '1',
nostroAcNumber: '98765434',
bankAddress1: 'NO.21 MADAME CAMA ROAD',
bankAddress2: 'NARIMAN POINT',
bankAddress3: 'MUMBAI INDIA 400021',
importLc: '90000000',
exportLc: '800000',
guarantee: '700000000',
},
{bankId: '512WWW22',
bicCode: 'union145',
bankName: 'unionJJH',
// correspondent: '1',
nostroAcNumber: '98765434',
bankAddress1: 'NO.21 MADAME CAMA ROAD',
bankAddress2: 'NARIMAN POINT',
bankAddress3: 'MUMBAI INDIA 400021',
importLc: '90000000',
exportLc: '800000',
guarantee: '700000000',
},
{bankId: '1662HJJWWW22',
bicCode: 'union145',
bankName: 'union4',
// correspondent: '1',
nostroAcNumber: '98765434',
bankAddress1: 'NO.21 MADAME CAMA ROAD',
bankAddress2: 'NARIMAN POINT',
bankAddress3: 'MUMBAI INDIA 400021',
importLc: '90000000',
exportLc: '800000',
guarantee: '700000000',
},
{bankId: '412WWDFDFW22',
bicCode: 'union145',
bankName: 'union1',
// correspondent: '1',
nostroAcNumber: '98765434',
bankAddress1: 'NO.21 MADAME CAMA ROAD',
bankAddress2: 'NARIMAN POINT',
bankAddress3: 'MUMBAI INDIA 400021',
importLc: '90000000',
exportLc: '800000',
guarantee: '700000000',
},
{bankId: '212WWDFDFW22',
bicCode: 'union145',
bankName: 'union',
// correspondent: '1',
nostroAcNumber: '98765434',
bankAddress1: 'NO.21 MADAME CAMA ROAD',
bankAddress2: 'NARIMAN POINT',
bankAddress3: 'MUMBAI INDIA 400021',
importLc: '90000000',
exportLc: '800000',
guarantee: '700000000',
},
{bankId: '112WWDFDFW22',
bicCode: 'union145',
bankName: 'union2',
// correspondent: '1',
nostroAcNumber: '98765434',
bankAddress1: 'NO.21 MADAME CAMA ROAD',
bankAddress2: 'NARIMAN POINT',
bankAddress3: 'MUMBAI INDIA 400021',
importLc: '90000000',
exportLc: '800000',
guarantee: '700000000',
},
  ];
}
portcodeData() {
  return this.data = [
   {portCode: 12231, portcodeName: 'qwerty21', portcodeAddress1: '4gdfgfdg3', portcodeAddress2: '3423gh42', portcodeAddress3: '432fsd342'},
   {portCode: 12245, portcodeName: 'qwerty12', portcodeAddress1: 'd43dgdgfd', portcodeAddress2: '342hgf34', portcodeAddress3: '43sdf2342'},
   {portCode: 12241, portcodeName: 'qwerty23', portcodeAddress1: 'd3gfdg4dd', portcodeAddress2: '342hhg34', portcodeAddress3: '43fs5d342'},
   {portCode: 12285, portcodeName: 'qwerty32', portcodeAddress1: 'd3gffg4dd', portcodeAddress2: '342gh342', portcodeAddress3: '43234dfs2'},
   {portCode: 12240, portcodeName: 'qwerty34', portcodeAddress1: 'd34dfgfdd', portcodeAddress2: '34234562', portcodeAddress3: '4323sdf42'},
   {portCode: 12282, portcodeName: 'qwerty43', portcodeAddress1: 'd3gfdggdf', portcodeAddress2: '34ghh234', portcodeAddress3: '4323y5642'},
   {portCode: 12216, portcodeName: 'qwerty54', portcodeAddress1: 'd34dfgdfg', portcodeAddress2: '34fg2342', portcodeAddress3: '4323sdf42'},
   {portCode: 12295, portcodeName: 'qwerty45', portcodeAddress1: 'ddgfdg34d', portcodeAddress2: '342h3426', portcodeAddress3: '4323sdf42'},
   ];
 }
 insuranceData() {
  return this.data = [
    {insurerId: 1, insurerName: 'Insurer1', insurerAddress1: '444', insurerAddress2:'qqq', insurerAddress3: 'www'},
    {insurerId: 2, insurerName: 'Insurer2', insurerAddress1: '111', insurerAddress2:'333', insurerAddress3: '555'},
    {insurerId: 3, insurerName: 'Insurer3', insurerAddress1: '222', insurerAddress2:'888', insurerAddress3: '777'}
    ];
 }
 documentData() {
  return this.data = [
   {documentId: 1, documentName: 'document1', documentDescription: 'ddd1'},
   {documentId: 2, documentName: 'document2', documentDescription: 'ddd2'},
   {documentId: 3, documentName: 'document3', documentDescription: 'ddd3'},
   {documentId: 4, documentName: 'document4', documentDescription: 'ddd4'},
   {documentId: 5, documentName: 'document5', documentDescription: 'ddd5'}
  ];
}
countryCodeData() {
  return this.data = [
   {countryCode: 'USD', countryName: 'saa'},
   {countryCode: 'AUI', countryName: 'saa'},
   {countryCode: 'AFG', countryName: 'saa'},
   {countryCode: 'USA', countryName: 'saa'},
   {countryCode: 'SRL', countryName: 'saa'},
   {countryCode: 'CHE', countryName: 'saa'}
   ];
 }
 currencyCodeData() {
  return this.data = [
   {currencyCode: 'USD', currencyName: 'saa'},
   {currencyCode: 'AUI', currencyName: 'saa'},
   {currencyCode: 'AFG', currencyName: 'sahga'},
   {currencyCode: 'USA', currencyName: 'sghghaa'},
   {currencyCode: 'SRL', currencyName: 'saa'},
   {currencyCode: 'CHE', currencyName: 'saa'}
   ];
 }


}
