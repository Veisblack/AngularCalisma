import { Component, OnInit } from '@angular/core';
import { ProductService } from './productService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
    constructor(private productService : ProductService) {
      console.log(productService.getProduct);
      
    }
    ngOnInit(): void {
      
    }
  
}
