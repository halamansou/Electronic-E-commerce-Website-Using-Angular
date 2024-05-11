import { FormControl } from '@angular/forms';
import { Product } from './../../../../product.app';
import { SearchPipe } from './../../Pipe/search.pipe';
import { RouterLink } from '@angular/router';
import { ProductsService } from './../../Services/products.service';
import { Component , OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule,RouterLink,SearchPipe],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {
  products: Product[] = [];
  searchTerm: string = '';

  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts().subscribe((response: Product[]) => {
      this.products = response;
    });
  }

  receiveSearchTerm(searchTerm: string): void {
    console.log('Search term received:', searchTerm);
    this.searchTerm = searchTerm;
  }
}