import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {Child} from "../model/Child";

@Injectable({
  providedIn: 'root'
})
export class ChildService {

  constructor(private http: HttpClient) { }


  getById(code : string) : Observable<Child> {
    return this.http.get<Child>( "http://api.shield.kaisens.fr/api/childs/"+code+"/");
  }

  get() : Observable<Child[]> {
    return this.http.get<Child[]>( "http://api.shield.kaisens.fr/api/users/john/childs/");
  }



  update(payload: Child) {
    return this.http.put<Child>(
      "http://api.shield.kaisens.fr/api/childs/"+payload.id+"/",

      payload
    );
  }
}
