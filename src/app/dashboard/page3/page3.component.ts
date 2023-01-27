import { Component } from '@angular/core';

import {UserService} from "../../services/user.service";
import {User} from "../../model/User";

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.scss']
})
export class Page3Component {
  namePattern = "[a-zA-Z]*";
  public user: User;

  constructor(private userService : UserService) {}

  ngOnInit(): void {
    this.getUser();
  }


  getUser()
  {

    this.userService.getById("john").subscribe( (data : any) => {
      this.user = data;
    });
  }

  updateUser()
  {
    this.userService.update(this.user).subscribe( (data) => {
      this.user = data;
    })
  }
}
