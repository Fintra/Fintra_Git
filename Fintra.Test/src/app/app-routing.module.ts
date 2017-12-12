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
import { FilterContentComponent } from './Masters/content/filter-content/filter-content.component';
import { TabContentComponent } from './Masters/content/tab-content/tab-content.component';
import { ContentViewComponent } from './Masters/content/content-view/content-view.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  // tslint:disable-next-line:max-line-length
  { path: 'filterCustomer', component: FilterCustomerComponent, children: [{path: 'tabCustomer', component: TabCustomerComponent, children: [{path: 'customerView', component: CustomerViewComponent}, {path: 'account', component: AccountComponent},{path: 'customerResult', component: CustomerResultComponent}]}] },
  { path: 'filterCounterParty', component: FilterCounterPartyComponent, children: [{path: 'tabCounterParty', component: TabCounterPartyComponent, children: [{path: 'counterPartView', component: CounterPartyViewComponent}]}] },
  // tslint:disable-next-line:max-line-length
  { path: 'filterContent', component: FilterContentComponent,
      children: [{path: 'tabContent', component: TabContentComponent,
               children: [{path: 'contentView', component: ContentViewComponent}]}] }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
