import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  product = {
    name: '',
    price: 0,
    description: '',
    quantity: 0,
    image: ''
  };

  constructor(private http: HttpClient, private router: Router) {}

  onSubmit() {
    this.http.post('https://localhost:7158/api/Product', this.product)
      .subscribe({
        next: (response) => {
          console.log('Product added successfully', response);
          this.router.navigate(['/admin/all-products']);
        },
        error: (error) => console.error('There was an error!', error)
      });
  }
}
