import { ProductsService } from './../../Services/products.service';
import { Product } from './../../../../product.app';
import { Component, Output, EventEmitter } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-navebar',
  standalone: true,
  imports:[ RouterLink, RouterLinkActive,ReactiveFormsModule,FormsModule],
  templateUrl: './navebar.component.html',
  styleUrl: './navebar.component.css'
})
export class NavebarComponent {

  @Output() searchEvent = new EventEmitter<string>();
  searchTerm: string = '';

  constructor() {}

  emitSearchTerm(): void {
    console.log('Search term emitted:', this.searchTerm);
    this.searchEvent.emit(this.searchTerm);
  } 
  
}
