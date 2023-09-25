import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './components/products/products.component';
import { FormsModule } from '@angular/forms';
import { SearchBoxPipe } from './search-box.pipe';
import { ChangeNumberToTextPipe } from './change-number-to-text.pipe';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/page/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    SearchBoxPipe,
    ChangeNumberToTextPipe,
    ProductDetailComponent,
    NotFoundComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
