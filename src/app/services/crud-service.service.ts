import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CrudServiceService {
  URL = "http://localhost:3000";
 
  constructor(private _http: HttpClient) { }
  getProductList() {
    return this._http.get("http://localhost:3000/list");
  }
  // addProduct(product) {
  //   return this._http.post("http://localhost:3000/addproduct", product)
  // }
  deleteProduct(Id) {
    let delteUrl="http://localhost:3000/delete";
    return this._http.delete(`${delteUrl}?userId=${Id}`);
  }
  getcurrent(Id) {
    let viewUrl="http://localhost:3000/view";
    return this._http.get(`${viewUrl}?userId=${Id}`);
  }
  updateProduct(Id, data) {
    let updateUrl="http://localhost:3000/update";
    return this._http.put(`${updateUrl}?userId=${Id}`, data);
  }
uloadFile(data){
  let fileUrl="http://localhost:3000/upload";
  return this._http.post(`${fileUrl}`, data);
}
}