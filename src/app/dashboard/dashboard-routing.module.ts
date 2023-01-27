import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Page1Component} from "./page1/page1.component";
import {Page2Component} from "./page2/page2.component";
import {DashboardComponent} from "./home/dashboard.component";
import {Page3Component} from "./page3/page3.component";




const routes: Routes = [

  { path: '',
    component:DashboardComponent
  },
  {
    path: 'listChild',
    component:Page1Component
  } ,
  {
    path: 'updateChild',
    component:Page2Component
  }  ,
  {
    path: 'updateUser',
    component:Page3Component
  } ,
  {
    path: '',
    redirectTo: 'listChild',
    pathMatch: 'full'
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})export class DashboardRoutingModule { }
