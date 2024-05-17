import { AuthGuard } from './Services/auth.guard';  // Ensure this path is correct
import { CartComponent } from './Components/cart/cart.component';
import { ProductDetailsComponent } from './Components/product/product-details/product-details.component';
import { NotfoundComponent } from './Components/notfound/notfound.component';
import { RootComponent } from './Components/root/root.component';
import { RegisterComponent } from './Components/register/register.component';
import { LoginComponent } from './Components/login/login.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { AboutComponent } from './Components/about/about.component';
import { ProductComponent } from './Components/product/product.component';
// import { HomeComponent } from './Components/home/home.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', component: RootComponent, pathMatch: 'full', canActivate: [AuthGuard] },
    { path: 'home', component: RootComponent, pathMatch: 'full', canActivate: [AuthGuard] },
    { path: 'products', component: ProductComponent, canActivate: [AuthGuard] },
    { path: 'productDetails/:id', component: ProductDetailsComponent },
    { path: 'about', component: AboutComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'contact', component: ContactUsComponent, canActivate: [AuthGuard] },
    { path: 'cart', component: CartComponent, canActivate: [AuthGuard] },
    { path: '**', component: NotfoundComponent },
];
