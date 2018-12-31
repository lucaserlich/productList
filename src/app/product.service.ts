import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }

  getProductList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/products`);
  }

  getProductSearch(keyword: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/products/search/${keyword}`);
  }
}
