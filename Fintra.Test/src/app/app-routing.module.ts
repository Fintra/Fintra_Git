import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { FilterCustomerComponent } from './Masters/customer/filterCustomer/filterCustomer.component';
import { CustomerViewComponent } from './Masters/customer/customer-view/customer-view.component';
import { TabCustomerComponent } from './Masters/customer/tabCustomer/tabCustomer.component';
import { AccountComponent } from './Masters/customer/account/account.component';
const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  // tslint:disable-next-line:max-line-length
  { path: 'filterCustomer', component: FilterCustomerComponent, children: [{path: 'tabCustomer', component: TabCustomerComponent, children: [{path: 'customerView', component: CustomerViewComponent}, {path: 'account', component: AccountComponent}]}] },
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
