import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms'
import { IProduct } from 'src/app/interfaces/product';
import { lastValueFrom } from 'rxjs'
import { ProductService } from 'src/app/servives/product.service';
@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent {
  productForm = this.formBuilder.group({
    name: [''],
    price: [0],
    desc: [''],
    imageURL: ['']
  });

  mode: "create" | "update" = "create";

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService
  ) {

  }

  async onHandleSubmit() {
    if (this.productForm.invalid) return;
    await lastValueFrom(this.productService.add(this.productForm.value as IProduct))
  }
}
