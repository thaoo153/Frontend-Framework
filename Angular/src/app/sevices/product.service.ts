import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduct } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(`https://6110f09bc38a0900171f0ed0.mockapi.io/product`)
  }
  getProductById(id: number | string): Observable<IProduct> {
    return this.http.get<IProduct>(`https://6110f09bc38a0900171f0ed0.mockapi.io/product/${id}`)
  }
  addProduct(product: IProduct): Observable<IProduct> {
    return this.http.post<IProduct>(`https://6110f09bc38a0900171f0ed0.mockapi.io/product`, product)
  }
}