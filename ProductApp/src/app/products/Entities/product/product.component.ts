import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../product.entity';

import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit,AfterViewInit {
  ngAfterViewInit(): void {
    setTimeout(( )=>this.app.getProducts().subscribe(data => {this.products=data;}),200
  )
  //   this.appservice .getProducts().subscribe(data => {this.products=data;});
  //
 }
  imageWidth=40;
  imageMargin=2;
  Products: Product[] = [];
  name = "Simran Sehrawat";
  products;
  constructor( private app:AppService, private router:Router) { }

  ngOnInit() {
    
    this.app.getProducts().subscribe(data => {
      this.products=data;
    });
    
  }

  editproduct(id):void{
    this.router.navigate(['editproduct',id])
  }
  
  DeleteProd(id):void{
    this.router.navigate(['delproduct',id])
  }
  Detailsproduct(id)
  {
    this.router.navigate(['details',id])
  }
}
