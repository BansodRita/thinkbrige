import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddProductComponent } from './components/add-product/add-product.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductUpdateComponent } from './components/product-update/product-update.component';
import { SingleComponent } from './components/single/single.component';


const routes: Routes = [
  {path:'', component:ProductListComponent},
  {path:'home', component:ProductListComponent},
  {path:'add', component:AddProductComponent},
  {path:'update/:id', component:ProductUpdateComponent},
  {path:'single/:id', component:SingleComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
