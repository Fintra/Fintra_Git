import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { FilterCustomerComponent } from './Masters/customer/filterCustomer/filterCustomer.component';
import { CustomerViewComponent } from './Masters/customer/customer-view/customer-view.component';
import { TabCustomerComponent } from './Masters/customer/tabCustomer/tabCustomer.component';
import { AccountComponent } from './Masters/customer/account/account.component';
import { CustomerResultComponent } from './Masters/customer/customer-result/customer-result.component';
import { FilterCounterPartyComponent } from './Masters/counter-party/filter-counter-party/filter-counter-party.component';
import { TabCounterPartyComponent } from './Masters/counter-party/tab-counter-party/tab-counter-party.component';
import { CounterPartyViewComponent } from './Masters/counter-party/counter-party-view/counter-party-view.component';
import { CounterpartyResultComponent } from './Masters/counter-party/counterparty-result/counterparty-result.component';
import { FilterContentComponent } from './Masters/content/filter-content/filter-content.component';
import { TabContentComponent } from './Masters/content/tab-content/tab-content.component';
import { ContentViewComponent } from './Masters/content/content-view/content-view.component';
import { ContentResultComponent } from './Masters/content/content-result/content-result.component';
import { BankFilterComponent } from './Masters/bank/bank-filter/bank-filter.component';
import { TabBankComponent } from './Masters/bank/tab-bank/tab-bank.component';
import { BankViewComponent } from './Masters/bank/bank-view/bank-view.component';
import { BankResultComponent } from './Masters/bank/bank-result/bank-result.component';
import { FilterPortcodeComponent } from './Masters/portcode/filter-portcode/filter-portcode.component';
import { TabPortcodeComponent } from './Masters/portcode/tab-portcode/tab-portcode.component';
import { PortcodeViewComponent } from './Masters/portcode/portcode-view/portcode-view.component';
import { FilterInsuranceComponent } from './Masters/insurance/filter-insurance/filter-insurance.component';
import { TabInsuranceComponent } from './Masters/insurance/tab-insurance/tab-insurance.component';
import { InsuranceViewComponent } from './Masters/insurance/insurance-view/insurance-view.component';
import { FilterDocumentComponent } from './Masters/document/filter-document/filter-document.component';
import { TabDocumentComponent } from './Masters/document/tab-document/tab-document.component';
import { DocumentViewComponent } from './Masters/document/document-view/document-view.component';
import { PageNotFoundComponent } from './PageNotFound/PageNotFound.component';
import { FilterCountrycodeComponent } from './Masters/countrycode/filter-countrycode/filter-countrycode.component';
import { TabCountrycodeComponent } from './Masters/countrycode/tab-countrycode/tab-countrycode.component';
import { CountrycodeViewComponent } from './Masters/countrycode/countrycode-view/countrycode-view.component';
import { FilterCurrencycodeComponent } from './Masters/currencycode/filter-currencycode/filter-currencycode.component';
import { TabCurrencycodeComponent } from './Masters/currencycode/tab-currencycode/tab-currencycode.component';
import { CurrencycodeViewComponent } from './Masters/currencycode/currencycode-view/currencycode-view.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  // tslint:disable-next-line:max-line-length
  { path: 'filterCustomer', component: FilterCustomerComponent, children: [{path: 'tabCustomer', component: TabCustomerComponent, children: [{path: 'customerView', component: CustomerViewComponent}, {path: 'account', component: AccountComponent}, {path: 'customerResult', component: CustomerResultComponent}]}] },
  { path: 'filterCounterParty', component: FilterCounterPartyComponent, children: [{path: 'tabCounterParty', component: TabCounterPartyComponent, children: [{path: 'counterPartView', component: CounterPartyViewComponent}, {path: 'counterPartyResult', component: CounterpartyResultComponent}]}] },
  // tslint:disable-next-line:max-line-length
  { path: 'filterContent', component: FilterContentComponent,
  children: [{path: 'tabContent', component: TabContentComponent, children: [{path: 'contentView', component: ContentViewComponent}, {path: 'contentResult', component: ContentResultComponent}]}] },
  // tslint:disable-next-line:max-line-length
  { path: 'bankFilterM', component: BankFilterComponent, children: [{path: 'bankTabM', component: TabBankComponent, children: [{path: 'bankViewM', component: BankViewComponent}, {path: 'bankResult', component: BankResultComponent}]}] },
// tslint:disable-next-line:max-line-length
  {path: 'filterPortcode', component: FilterPortcodeComponent, children: [{ path: 'tabPortcode', component: TabPortcodeComponent, children: [{ path: 'portcodeView', component: PortcodeViewComponent }]}]},
// tslint:disable-next-line:max-line-length
  {path: 'filterInsurance', component: FilterInsuranceComponent, children: [{ path: 'tabInsurance', component: TabInsuranceComponent, children: [{ path: 'insuranceView', component: InsuranceViewComponent }]}]},
  {path: 'filterDocument', component: FilterDocumentComponent, children: [{path: 'tabDocument', component: TabDocumentComponent, children: [{ path: 'documentView', component: DocumentViewComponent }]}]},
  { path: 'filterCountrycode', component: FilterCountrycodeComponent,
  children: [{path: 'tabCountrycode', component: TabCountrycodeComponent,
           children: [{path: 'countryCodeView', component: CountrycodeViewComponent}]}] },
    { path: 'filterCurrencycode', component: FilterCurrencycodeComponent,
    children: [{path: 'tabCurrencycode', component: TabCurrencycodeComponent,
            children: [{path: 'currencyCodeView', component: CurrencycodeViewComponent}]}] },
  // tslint:disable-next-line:max-line-length
  {path: '**', component: PageNotFoundComponent },
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
