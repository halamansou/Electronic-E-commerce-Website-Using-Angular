import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from './../../../Services/products.service';

@Component({
  selector: 'app-edit-product',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  productDetails: any = {
    name: '',
    price: 0,
    description: '',
    quantity: 1,
    image: ''
  };
  productId: any;

  constructor(private activatedRoute: ActivatedRoute, private productsService: ProductsService, private router: Router) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.productId = params.get('id');
      if (this.productId) {
        this.loadProductDetails();
      }
    });
  }

  loadProductDetails(): void {
    this.productsService.getProductDetails(this.productId).subscribe({
      next: (response) => {
        this.productDetails = response;
      },
      error: (err) => console.error('Error fetching product details', err)
    });
  }

  onSubmit(): void {
    this.productsService.updateProduct(this.productId, this.productDetails).subscribe({
      next: () => {
        this.router.navigate(['/admin/all-products']);
      },
      error: (err) => console.error('Error updating product', err)
    });
  }
}
