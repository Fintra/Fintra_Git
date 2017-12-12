import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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
import { FilterPipeModule } from 'ngx-filter-pipe';
import { FilterContentComponent } from './Masters/content/filter-content/filter-content.component';
import { TabContentComponent } from './Masters/content/tab-content/tab-content.component';
import { ContentViewComponent } from './Masters/content/content-view/content-view.component';
import {  TruncatePipe } from './Services/filter.pipe';
import { CustomerResultComponent } from './Masters/customer/customer-result/customer-result.component';
@NgModule({
  // tslint:disable-next-line:max-line-length
  declarations: [AppComponent, LoginComponent, HeaderComponent, FooterComponent, DashboardComponent, FilterCustomerComponent, CustomerViewComponent, TabCustomerComponent, AccountComponent, FilterCounterPartyComponent, TabCounterPartyComponent, CounterPartyViewComponent, FilterContentComponent, TabContentComponent, ContentViewComponent, TruncatePipe, CustomerResultComponent ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    FilterPipeModule,
    TooltipModule.forRoot(),
    BsDatepickerModule.forRoot()
  ],
  providers: [CommonDataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
