import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerNewComponent } from './component/pages/customer/customer-new/customer-new.component';
import { HomeComponent } from './component/pages/home/home.component';
import { ProviderNewComponent } from './component/pages/provider/provider-new/provider-new.component';
import { SupplyNewComponent } from './component/pages/supply/supply/supply-new.component';
import { EmployeeNewComponent } from './component/pages/employee/employee-new/employee-new.component';
import { FortNightNewComponent } from './component/pages/fort-night/fort-night/fort-night-new.component';
import { FortNightCompleteComponent } from './component/pages/fort-night/fort-night-complete/fort-night-complete.component';
import { EnterpriseNewComponent } from './component/pages/enterprise/enterprise-new/enterprise-new.component';

const routes: Routes = [
  { path:'home', component:HomeComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'customer-new', component:CustomerNewComponent},
  { path:'provider-new', component:ProviderNewComponent},
  { path: 'supply-new', component:SupplyNewComponent },
  { path: 'employee-new', component:EmployeeNewComponent },
  { path:'fort-night', component:FortNightNewComponent},
  {path:'fort-night-complete',component:FortNightCompleteComponent},
  { path:'enterprise-new', component:EnterpriseNewComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
