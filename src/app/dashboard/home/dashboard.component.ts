import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, ViewChild } from '@angular/core';
import {Router} from "@angular/router";


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {


  constructor(private responsive: BreakpointObserver,private router: Router){}
  @ViewChild('drawer') drawer:any;
  registerRequest = false;
  hideSideMenu = true;
  ngOnInit(): void {
   this.registerRequest = true;
  }

  ngAfterViewInit(): void {
  this.responsive.observe([
      Breakpoints.Large
      ])
      .subscribe(result => {
        this.hideSideMenu = true;

        if (result.matches) {
          this.drawer.open();

          this.hideSideMenu = false;
        }

  });
  }


}
