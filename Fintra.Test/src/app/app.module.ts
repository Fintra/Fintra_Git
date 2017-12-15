import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MalihuScrollbarModule } from 'ngx-malihu-scrollbar';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { BsDatepickerModule } from 'ngx-bootstrap';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './common/footer/footer.component';
import { HeaderComponent } from './common/header/header.component';
import { FilterCustomerComponent } from './Masters/customer/filterCustomer/filterCustomer.component';
import { CommonDataService } from './Services/common-data.service';
import { TabCustomerComponent } from './Masters/customer/tabCustomer/tabCustomer.component';
import { CustomerViewComponent } from './Masters/customer/customer-view/customer-view.component';
import { AccountComponent } from './Masters/customer/account/account.component';
import { FilterCounterPartyComponent } from './Masters/counter-party/filter-counter-party/filter-counter-party.component';
import { TabCounterPartyComponent } from './Masters/counter-party/tab-counter-party/tab-counter-party.component';
import { CounterPartyViewComponent } from './Masters/counter-party/counter-party-view/counter-party-view.component';
import { FilterContentComponent } from './Masters/content/filter-content/filter-content.component';
import { TabContentComponent } from './Masters/content/tab-content/tab-content.component';
import { ContentViewComponent } from './Masters/content/content-view/content-view.component';
import { BankFilterComponent } from './Masters/bank/bank-filter/bank-filter.component';
import { TabBankComponent } from './Masters/bank/tab-bank/tab-bank.component';
import { BankViewComponent } from './Masters/bank/bank-view/bank-view.component';
import { BankResultComponent } from './Masters/bank/bank-result/bank-result.component';
import { CustomerResultComponent } from './Masters/customer/customer-result/customer-result.component';
import { TruncatePipe } from './Services/filter.pipe';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { ContentResultComponent } from './Masters/content/content-result/content-result.component';
import { CounterpartyResultComponent } from './Masters/counter-party/counterparty-result/counterparty-result.component';
import { FilterPortcodeComponent } from './Masters/portcode/filter-portcode/filter-portcode.component';
import { TabPortcodeComponent } from './Masters/portcode/tab-portcode/tab-portcode.component';
import { PortcodeViewComponent } from './Masters/portcode/portcode-view/portcode-view.component';
import { FilterInsuranceComponent } from './Masters/insurance/filter-insurance/filter-insurance.component';
import { TabInsuranceComponent } from './Masters/insurance/tab-insurance/tab-insurance.component';
import { InsuranceViewComponent } from './Masters/insurance/insurance-view/insurance-view.component';
import { FilterDocumentComponent } from './Masters/document/filter-document/filter-document.component';
import { TabDocumentComponent } from './Masters/document/tab-document/tab-document.component';
import { DocumentViewComponent } from './Masters/document/document-view/document-view.component';
import { FilterCountrycodeComponent } from './Masters/countrycode/filter-countrycode/filter-countrycode.component';
import { TabCountrycodeComponent } from './Masters/countrycode/tab-countrycode/tab-countrycode.component';
import { CountrycodeViewComponent } from './Masters/countrycode/countrycode-view/countrycode-view.component';
import { FilterCurrencycodeComponent } from './Masters/currencycode/filter-currencycode/filter-currencycode.component';
import { TabCurrencycodeComponent } from './Masters/currencycode/tab-currencycode/tab-currencycode.component';
import { CurrencycodeViewComponent } from './Masters/currencycode/currencycode-view/currencycode-view.component';
import { PageNotFoundComponent } from './PageNotFound/PageNotFound.component';
import { CommodityComponent, FilterCommodityComponent, TabCommodity } from './Masters/commodity/commodity.component';
import { ServicesService } from './Services/services.service';

@NgModule({
  // tslint:disable-next-line:max-line-length
  declarations: [AppComponent, LoginComponent, HeaderComponent, FooterComponent, DashboardComponent, FilterCustomerComponent, CustomerViewComponent, TabCustomerComponent, AccountComponent, FilterCounterPartyComponent, TabCounterPartyComponent, CounterPartyViewComponent, FilterContentComponent, TabContentComponent, ContentViewComponent, TruncatePipe, CustomerResultComponent, BankFilterComponent, TabBankComponent, BankViewComponent, BankResultComponent, ContentResultComponent, CounterpartyResultComponent, FilterPortcodeComponent, TabPortcodeComponent, PortcodeViewComponent, FilterInsuranceComponent, TabInsuranceComponent, InsuranceViewComponent, FilterDocumentComponent, TabDocumentComponent, DocumentViewComponent, PageNotFoundComponent, FilterCountrycodeComponent, TabCountrycodeComponent, CountrycodeViewComponent, FilterCurrencycodeComponent, TabCurrencycodeComponent, CurrencycodeViewComponent, CommodityComponent, FilterCommodityComponent, TabCommodity],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    FilterPipeModule,
    TooltipModule.forRoot(),
    MalihuScrollbarModule.forRoot(),
    BsDatepickerModule.forRoot()
  ],
  providers: [CommonDataService, CookieService, ServicesService],
  bootstrap: [AppComponent]
})
export class AppModule {}
