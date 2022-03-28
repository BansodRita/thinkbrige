import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { CrudServiceService } from 'src/app/services/crud-service.service'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productList: any = [];
  searchText: any;
  constructor(private router: Router, private apiservice: CrudServiceService) { }
  ngOnInit(): void {
    this.getData();
  }
  getData(){
    this.apiservice.getProductList().subscribe((data) => {
      this.productList = data;
      console.log(this.productList);
    })
  }
  deleteProduct(deleteid: any) {
  
    this.apiservice.deleteProduct(deleteid).subscribe((data) => {
      console.log(data)
      this.getData();
      
    });
    
  }
}