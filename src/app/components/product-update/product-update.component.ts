import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { CrudServiceService } from 'src/app/services/crud-service.service';
import { ActivatedRoute } from '@angular/router'
@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {
  addProduct = new FormGroup({
    ProductName: new FormControl(''),
    ProductDescription: new FormControl(''),
    ProductPrice: new FormControl(''),
  })
  constructor(private apiservice: CrudServiceService, private router: ActivatedRoute) { }
  ngOnInit(): void {
    console.log(this.router.snapshot.params.id)
    this.apiservice.getcurrent(this.router.snapshot.params.id).subscribe((data) => {
      this.addProduct = new FormGroup({
        ProductName: new FormControl(data['ProductName']),
        ProductDescription: new FormControl(data['ProductDescription']),
        ProductPrice: new FormControl(data['ProductPrice']),
      });
    });
  }
  updateProduct() {
    console.log(this.addProduct.value)
    this.apiservice.updateProduct(this.router.snapshot.params.id, this.addProduct.value).subscribe((data) => {
      console.log(data);
    });
    this.clearForm();
  }
  clearForm() {
    this.addProduct.reset();
  }}
