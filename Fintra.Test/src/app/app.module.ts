import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { BsDatepickerModule } from 'ngx-bootstrap';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from '../common/footer/footer.component';
import { HeaderComponent } from '../common/header/header.component';
import { FilterCustomerComponent } from './Masters/customer/filterCustomer/filterCustomer.component';
import { CustomerDataService } from './Masters/customer/customer-data.service';
import { TabCustomerComponent } from './Masters/customer/tabCustomer/tabCustomer.component';
import { CustomerViewComponent } from './Masters/customer/customer-view/customer-view.component';
import { AccountComponent } from './Masters/customer/account/account.component';
@NgModule({
  // tslint:disable-next-line:max-line-length
  declarations: [AppComponent, LoginComponent, HeaderComponent, FooterComponent, DashboardComponent, FilterCustomerComponent, CustomerViewComponent, TabCustomerComponent, AccountComponent],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    TooltipModule.forRoot(),
    BsDatepickerModule.forRoot()
  ],
  providers: [CustomerDataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
