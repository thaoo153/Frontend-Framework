import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/page/home/home.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';

const routes: Routes = [
  // {
  //   path: "", component: HomeComponent, children: [
  //     // localhost:4200/products
  //     { path: "products", component: ProductsComponent },
  //     { path: "products/:id", component: ProductDetailComponent }
  //   ],
  // },
  // { path: '**', component: NotFoundComponent },
  { path: "", component: HomeComponent },
  { path: "products", component: ProductsComponent },
  { path: "**", component: NotFoundComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }