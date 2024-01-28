import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerNewComponent } from './component/pages/customer/customer-new/customer-new.component';
import { HomeComponent } from './component/pages/home/home.component';
import { ProviderNewComponent } from './component/pages/provider/provider-new/provider-new.component';

const routes: Routes = [
  { path:'home', component:HomeComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'customer-new', component:CustomerNewComponent},
  { path:'provider-new', component:ProviderNewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
