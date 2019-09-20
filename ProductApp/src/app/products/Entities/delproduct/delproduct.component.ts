import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-delproduct',
  templateUrl: './delproduct.component.html',
  styleUrls: ['./delproduct.component.css']
})
export class DelproductComponent implements OnInit {

  productidtodelete="1";
  constructor(private ps:AppService,private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((data)=>{
      this.productidtodelete=data.id;
    });
  }
  deleteProduct(){
    this.ps.deleteProduct(this.productidtodelete).subscribe(data => {
      console.log(data);
    })
    alert("Data Deleted");

  }

}

