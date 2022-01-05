import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CulistComponent } from './culist/culist.component';

const routes: Routes = [
  {path:'culist',component:CulistComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
