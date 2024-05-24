import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ProductsService } from './../../../Services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-product',
  standalone: true,

  imports: [CommonModule],
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent {
  @Input() productId!: number;
  @Output() productDeleted = new EventEmitter<void>();
  showDialog: boolean = false;

  constructor(private productsService: ProductsService, private router: Router) {}

  confirmDelete(): void {
    this.showDialog = true;
  }

  cancelDelete(): void {
    this.showDialog = false;
  }

  deleteProduct(): void {
    console.log('Delete product method called');
    this.productsService.deleteProduct(this.productId).subscribe({
      next: () => {
        this.showDialog = false;
        this.productDeleted.emit();
        this.router.navigate(['/admin/all-products']);
      },
      error: (err) => console.error('Error deleting product', err)
    });
  }
  
}
