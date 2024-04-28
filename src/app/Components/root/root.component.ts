import { FooterComponent } from './../footer/footer.component';
import { OfferComponent } from './../offer/offer.component';
import { HomeComponent } from './../home/home.component';
import { NavebarComponent } from './../navebar/navebar.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavebarComponent,HomeComponent,OfferComponent,FooterComponent],
  templateUrl: './root.component.html',
  styleUrl: './root.component.css'
})
export class RootComponent {

}
