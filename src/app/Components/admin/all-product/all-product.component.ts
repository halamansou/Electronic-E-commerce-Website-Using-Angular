import { DeleteProductComponent } from './../delete-product/delete-product.component';
import { Product } from './../../../../../product.app';
// all-product.component.ts
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProductsService } from './../../../Services/products.service';
import { CartService } from './../../../Services/cart.service';


@Component({
  selector: 'app-all-product',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule,DeleteProductComponent],
  templateUrl: './all-product.component.html',
  styleUrls: ['./all-product.component.css']
})
export class AllProductComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts().subscribe((response: Product[]) => {
      this.products = response;
    });
  }

  // confirmDelete();
}
