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

    { path: '', component: RootComponent ,pathMatch: 'full' },
    { path: 'home', component: RootComponent ,pathMatch: 'full' },
    { path: 'products', component: ProductComponent },
    { path: 'productDetails/:id', component: ProductDetailsComponent },

    { path: 'about', component: AboutComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'contact', component: ContactUsComponent },

    { path: '**', component: NotfoundComponent },
];
