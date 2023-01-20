import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";




const routes: Routes = [


  {
    path: 'front',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  },

  {
    path: '',
    redirectTo: 'front',
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
