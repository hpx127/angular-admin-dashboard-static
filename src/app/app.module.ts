import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatelogsModule } from './catelogs/catelogs.module';
import { CustomerModule } from './customer/customer.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OrderModule } from './order/order.module';
import { RegiComponent } from './regi/regi.component';
import { LoginComponent } from './login/login.component';
import { ForgetComponent } from './forget/forget.component';
import { ConfirmComponent } from './confirm/confirm.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    RegiComponent,
    LoginComponent,
    ForgetComponent,
    ConfirmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CatelogsModule,
    OrderModule,
    FormsModule,
    CustomerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
