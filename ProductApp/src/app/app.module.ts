import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ProductsModule } from './products/products.module';

import { HttpClientModule } from '@angular/common/http';
import { AppService } from './app.service';
import { HomeComponent } from './products/home/home.component';
import { LoginComponent } from './products/login/login.component';
import { PagenotfoundComponent } from './products/pagenotfound/pagenotfound.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    PagenotfoundComponent,
 
  ],
  imports: [
    BrowserModule,
    ProductsModule,
    HttpClientModule,
    AppRoutingModule,
   
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
