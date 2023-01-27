import { Component } from '@angular/core';
import {ChildService} from "../../services/child.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Child} from "../../model/Child";

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.scss']
})
export class Page2Component {

  namePattern = "[a-zA-Z]*";

  constructor(private childService : ChildService) {}

  public child: Child;

  ngOnInit(): void {
    this.getChild();
  }


  getChild()
  {

    this.childService.getById("363").subscribe( (data : any) => {
      this.child = data;
    });
  }

  updateChild()
  {
    this.childService.update(this.child).subscribe( (data) => {
      this.child = data;
    })
  }
}
