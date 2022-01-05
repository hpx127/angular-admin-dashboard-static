import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatelogsRoutingModule } from './catelogs-routing.module';
import { PrdctListComponent } from './prdct-list/prdct-list.component';
import { PrdctChgComponent } from './prdct-chg/prdct-chg.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PrdctListComponent,
    PrdctChgComponent
  ],
  imports: [
    CommonModule,
    CatelogsRoutingModule,
    FormsModule
  ]
})
export class CatelogsModule { }
