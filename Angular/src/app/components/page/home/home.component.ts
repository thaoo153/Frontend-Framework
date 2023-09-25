import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  products: string = '/products'; // ví dụ, có thể là một đường dẫn hoặc chuỗi bất kỳ

}
