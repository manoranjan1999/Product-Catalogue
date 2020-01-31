import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DisplayComponent } from './display/display.component';
import { AddproductComponent } from './addproduct/addproduct.component';


const routes: Routes = [
  {path: "displayProduct", component: DisplayComponent},
  {path: "addProduct", component: AddproductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
