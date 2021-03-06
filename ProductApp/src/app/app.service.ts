import { Injectable } from '@angular/core';

//import { HttpClient,HttpHeaders } from 'selenium-webdriver/http';
//import { throwError } from 'rxjs';
//import { Injectable } from '@angular/core';
//import { Product } from './product.entity';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import {tap,catchError,map} from 'rxjs/operators';
import {observable, throwError, Observable} from 'rxjs';
import { Product } from './products/product.entity';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  producturl='https://localhost:44359/api/products'
  
  headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept','application/json');
  httpOptions = {
    headers: this.headers
  };


  
  constructor(private http : HttpClient) { }

  private handleError(error: any){
    console.error(error);
    return throwError(error);
  }


  Postproducts(prod:Product){
    this.http.post<Product>(this.producturl,prod,this.httpOptions).pipe(catchError(this.handleError))
  }

  addProduct(prod:Product): Observable<Product>{
    return this.http.post<Product>(this.producturl,prod,this.httpOptions).pipe(
      tap(data => console.log(data)),
      catchError(this.handleError)
    );
  }
  updateProduct(prod:Product):Observable<null | Product>{
    return this.http.put<Product>(this.producturl,prod,this.httpOptions).pipe(
      tap(data => console.log(data)),
      catchError(this.handleError)
    );
  }

  getProducts():Observable<Product[]>{
    return this.http.get<Product[]>(this.producturl).pipe(
      tap(data => console.log(data)),
      catchError(this.handleError)
      );
  }
  urlcreater(id)
  {
    return "https://localhost:44359/api/products/"+id
  }

  putProduct(id:number,Prod:Product):Observable<null|Product>{
    console.log(Prod)
    return this.http.put<Product>(this.urlcreater(id),Prod,this.httpOptions).pipe(tap(data=>console.log(data)),catchError(this.handleError))
 
  }
  deleteProduct(id:string) : Observable<Product>
  {
    const myurl = `${this.producturl}/${id} `;
    return this.http.delete<Product>(myurl,this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }

 
  getProductById(id){
    return this.http.get<Product[]>(this.producturl+"/"+id).pipe(
      tap(data => console.log(data)),
      catchError(this.handleError)
      );
  }

}
