import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private httpClient: HttpClient) { }

  register(userData: any): Observable<any> {
    return this.httpClient.post('https://localhost:7158/api/Users', userData);
  }

  login(userData: any): Observable<any> {
    return this.httpClient.post('https://localhost:7158/api/Users/login', userData);
  }
}
