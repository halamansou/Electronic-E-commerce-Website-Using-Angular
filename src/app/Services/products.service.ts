import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private baseUrl = 'https://localhost:7158/api/Product';

  constructor(private httpClient: HttpClient) {}

  getProducts(): Observable<any> {
    return this.httpClient.get(this.baseUrl);
  }

  getProductDetails(productId: number): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/${productId}`);
  }

  updateProduct(productId: number, productDetails: any): Observable<any> {
    return this.httpClient.put(`${this.baseUrl}/${productId}`, productDetails);
  }
}
