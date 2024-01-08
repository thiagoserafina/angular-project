import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FetchServiceService {
  constructor(private httpClient: HttpClient) {}

  fetchData() {
    return this.httpClient.get('https://jsonplaceholder.typicode.com/todos/1');
  }
}
