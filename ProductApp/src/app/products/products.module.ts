import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DelproductComponent } from './Entities/delproduct/delproduct.component';
import { EditproductComponent } from './Entities/editproduct/editproduct.component';
import { ProductComponent } from './Entities/product/product.component';
import { ProductService } from './product.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ProductFilterPipe } from './ProductFilterPipe.pipes';

import { AppService } from '../app.service';
import { AddproductComponent } from './addproduct/addproduct.component';
import { ProductdetailsComponent } from './productdetails.component';



const productroutes:Routes = [
  {path:'products',component:ProductComponent},
  {path: 'addproduct', component:   AddproductComponent},
  {path:'delproduct/:id',component:DelproductComponent},
  {path:'editproduct/:id',component:EditproductComponent},
  {path:'details/:id',component:ProductdetailsComponent},
];

@NgModule({
  declarations: [   AddproductComponent, DelproductComponent, EditproductComponent, ProductComponent,ProductFilterPipe, AddproductComponent, ProductdetailsComponent],
  imports: [
    CommonModule,
  FormsModule,
  ReactiveFormsModule,
  RouterModule.forChild(productroutes),],

providers:[AppService]
})
export class ProductsModule { }
