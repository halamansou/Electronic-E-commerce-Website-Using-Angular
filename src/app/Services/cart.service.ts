import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  headers:any={
    token:localStorage.getItem('userToken')
  }
  constructor( private httpClient:HttpClient) { }

  addToCart(productId :number){
    //giv post the following (url + body + configration(that require in header) )

    return this.httpClient.post('url for add to cart',{productId:productId},
    {headers:this.headers})
    
  }
}
