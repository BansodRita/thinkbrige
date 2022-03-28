import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { CrudServiceService } from 'src/app/services/crud-service.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  addProduct: FormGroup;
  selectedfile:File;
  constructor(private fb: FormBuilder, private apiservice: CrudServiceService) { }
  ngOnInit(): void {
    this.addProduct = new FormGroup({
      ProductName: new FormControl('', Validators.required),
      ProductDescription: new FormControl('', Validators.required),
      ProductPrice: new FormControl('', Validators.required),
      productImg: new FormControl('', Validators.required),
    })
  }
  // get name() { return this.addProduct.get('customerName') }
  // get address() { return this.addProduct.get('customerAddress') }
  // get phone() {
  //   return this.addProduct.get('customerPhone');
  // }
  addCustomerFun() {
    console.log(this.addProduct.value)
    this.apiservice.addProduct(this.addProduct.value).subscribe((data) => {
      console.log(data);
    });
    this.clearForm();
  }
  clearForm() {
    this.addProduct.reset();
  }
  onchangefile(event:any){
   
    //console.log(event.target);
    console.log(event.target.files[0])
    this.selectedfile=<File>event.target.files[0];
    console.log(this.selectedfile);
  }
  uloadfile(){
    const fd=new FormData();
    fd.append('productImg', this.selectedfile, this.selectedfile.name)
    this.apiservice.uloadFile(fd).subscribe((data)=>{
      console.log(data);
    })
  }
}
