import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from './../../../Services/products.service';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private productsService: ProductsService) {}

  productDetails: any;
  productId: any;

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.productId = params.get('id');
      console.log('Product ID:', this.productId);
      // Call a method to load product details
      this.loadProductDetails(); 
    });
  }

  loadProductDetails(): void {
    this.productsService.getProductDetails(this.productId).subscribe({
      next: (response) => {
        console.log('Response:', response);
        this.productDetails = response; 
      }
    });
  }


// Default quantity
  quantity: number = 1; 

  increaseQuantity() {
    this.quantity++;
  }

  decreaseQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }
}
