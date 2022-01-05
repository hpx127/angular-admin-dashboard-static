import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrdctChgComponent } from './prdct-chg/prdct-chg.component';
import { PrdctListComponent } from './prdct-list/prdct-list.component';

const routes: Routes = [
  {path:'prdct-list',component:PrdctListComponent},
  {path:'prdct-chg',component:PrdctChgComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatelogsRoutingModule { }
