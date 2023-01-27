import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {User} from "../model/User";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }


  getById(username : string) : Observable<User> {
    return this.http.get<User>( "http://api.shield.kaisens.fr/api/users/"+username+"/");
  }

  get() : Observable<User[]> {
    return this.http.get<User[]>( "http://api.shield.kaisens.fr/api/users/");
  }



  update(payload: User) {
    return this.http.put<User>(
      "http://api.shield.kaisens.fr/api/users/"+payload.username+"/",
      payload
    );
  }
}
