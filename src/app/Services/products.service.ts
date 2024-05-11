import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  

  constructor(private httpClient :HttpClient) {}
    
  getProducts()  : Observable <any>{
    return this .httpClient.get('https://localhost:7158/api/Product');
  }

  getProductDetails(productId: number): Observable<any> {
    return this.httpClient.get(`https://localhost:7158/api/Product/${productId}`);
  }


  // searchProducts(searchTerm: string): Observable<any> {
  //   return this.httpClient.get(`https://localhost:7158/api/Product/search?term=${searchTerm}`);
  // }
  
}
