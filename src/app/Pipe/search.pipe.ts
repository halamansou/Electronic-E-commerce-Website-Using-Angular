import { Product } from './../../../product.app';
import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'search',
  standalone: true
})
export class SearchPipe implements PipeTransform {

  transform(products: Product[], searchTerm: string): Product[] {
    if (!searchTerm || searchTerm === '') {
      return products; // Return all products if no search term is provided
    }
    return products.filter((product) => 
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

}
