import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfirmComponent } from './confirm/confirm.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ForgetComponent } from './forget/forget.component';
import { LoginComponent } from './login/login.component';
import { RegiComponent } from './regi/regi.component';

const routes: Routes = [
  {path:'',component:DashboardComponent},
  {path:'catelogs', loadChildren:()=>import('./catelogs/catelogs.module').then(m=>m.CatelogsModule)},
  {path:'order', loadChildren:()=>import('./order/order.module').then(m=>m.OrderModule)},
  {path:'regi',component:RegiComponent},
  {path:'customer', loadChildren:()=>import('./customer/customer.module').then(m=>m.CustomerModule)},
  {path:'login',component:LoginComponent},
  {path:'forget',component:ForgetComponent},
  {path:'confirm',component:ConfirmComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
