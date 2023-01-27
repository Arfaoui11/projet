import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {ChildService} from "../../services/child.service";
import {Child} from "../../model/Child";

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss']
})
export class Page1Component {
  displayedColumns: string[] = ['parent','first_name', 'last_name', 'birthday','gender'];
  dataSource : Child[];
  public child: Child;



  constructor(private childService : ChildService,private router: Router) {}



  ngOnInit(): void {
    this.getAll();
  }

  getAll()
  {
    this.childService.get().subscribe(data => {
      this.dataSource = data;
    })
  }

  getUser()
  {

    this.childService.getById("363").subscribe( (data : any) => {
      this.child = data;
    });
  }

  updateUser()
  {
    this.childService.update(this.child).subscribe( (data) => {
      this.child = data;
    })
  }

}
