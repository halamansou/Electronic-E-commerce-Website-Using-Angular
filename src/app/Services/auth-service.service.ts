import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { jwtDecode } from 'jwt-decode';


@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  userData=null;

  constructor(private httpClient: HttpClient) { }
  decodeUserData(){
    let encodedToken = JSON.stringify(localStorage.getItem('userToken'));
    let decodedToken : any= jwtDecode(encodedToken);
    console.log(decodedToken);
    this.userData = decodedToken;

  }

  register(userData: any): Observable<any> {
    return this.httpClient.post('http://localhost:5177/api/Users', userData);
  }

  login(userData: any): Observable<any> {
    return this.httpClient.post('http://localhost:5177/api/Users/login', userData);
  }
}
