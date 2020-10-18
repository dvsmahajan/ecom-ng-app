import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  getHomePageProducts() {
    return this.http.get(`http://localhost:8080/api/v1/section/getAllSection`);
  }

  constructor(private http:HttpClient) {

  }
}
