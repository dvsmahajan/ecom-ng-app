import { ProductService } from './../../service/product/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-main',
  templateUrl: './home-main.component.html',
  styleUrls: ['./home-main.component.css']
})
export class HomeMainComponent implements OnInit {

  constructor(private productService: ProductService) { }
  resp:any=[];
  ngOnInit(): void {
    this.getMainPageProducts();
  }

  homePageProductList:any = [];
  getMainPageProducts() {
    this.productService.getHomePageProducts().subscribe(data=>{
      this.resp= data;
      console.log(this.resp)
      if(this.resp.code ==200){
        this.homePageProductList = this.resp.details;
      }
    });
  }

}
