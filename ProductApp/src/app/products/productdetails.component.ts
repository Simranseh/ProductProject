import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {
  productidtoedit:any;
  producttoedit;
  constructor(private route :ActivatedRoute,private appservice:AppService,private router:Router) { 
    this.route.params.subscribe((data)=>{
      this.productidtoedit=data.id;
    })
    this.appservice.getProductById(this.productidtoedit).subscribe(data=>{
      this.producttoedit=data;
     
    })
  }
  Goback():void{
    this.router.navigate(['home'])
  }
  ngOnInit() {
  }

}
