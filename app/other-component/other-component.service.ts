import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class OtherComponentService {

  constructor(private http: Http) {
  }

  getPeople() {
    return this.http.get('http://localhost:8081/getPeople/').map((resp) => resp.json());
  }
}
