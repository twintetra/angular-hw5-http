import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  url = 'https://jsonplaceholder.typicode.com/users';
  json: Observable<any>;

  getData(): void {
    this.json = this.http.get(this.url);
  }
}
