import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LayoutComponent} from "./layout/layout.component";
import {Page1Component} from "./page1/page1.component";
import {Page2Component} from "./page2/page2.component";
import {HomeComponent} from "./home/home.component";
const routes: Routes = [



  {
    path: 'home',
    component: LayoutComponent,
    children: [
      {
        path: 'who1',
        component: Page1Component,
      },
      {
        path: 'who2',
        component: Page2Component,
      }
      ,
      {
        path: 'acceuil',
        component: HomeComponent,
      }
    ]
  },
  {
    path: '',
    redirectTo: 'front/home/acceuil',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})export class DashboardRoutingModule { }
