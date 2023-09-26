import { Component } from '@angular/core';
import { IProduct } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/sevices/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  // products: string = '/products'; // ví dụ, có thể là một đường dẫn hoặc chuỗi bất kỳ
  products: IProduct[] = [];
  currentProduct!: IProduct;

  constructor(private productService: ProductService) {
    this.productService.getAll().subscribe({
      next: (data) => {
        this.products = data;
      },
      error: (error) => {
        console.log(error.message)
      }
    })
  }
}