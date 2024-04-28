import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { AboutComponent } from './Components/about/about.component';
import { RegisterComponent } from './Components/register/register.component';
import { LoginComponent } from './Components/login/login.component';
import { OfferComponent } from './Components/offer/offer.component';
import { ProductComponent } from './Components/product/product.component';
import { HomeComponent } from './Components/home/home.component';
import { FooterComponent } from './Components/footer/footer.component';
import { NavebarComponent } from './Components/navebar/navebar.component';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavebarComponent,FooterComponent,HomeComponent,ProductComponent,OfferComponent,LoginComponent,RegisterComponent,AboutComponent,ContactUsComponent,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Electronic E-commerce Website';
}
