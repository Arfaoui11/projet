import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";




const routes: Routes = [


  {
    path: 'back',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  },

  {
    path: '',
    redirectTo: 'back',
    pathMatch: 'full'
  },
  {
    path: "**",
    redirectTo: ''
  }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
