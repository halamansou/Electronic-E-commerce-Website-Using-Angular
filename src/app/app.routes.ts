import { AddProductComponent } from './Components/admin/add-product/add-product.component';
import { EditProductComponent } from './Components/admin/edit-product/edit-product.component';
import { DeleteProductComponent } from './Components/admin/delete-product/delete-product.component';
import { AllProductComponent } from './Components/admin/all-product/all-product.component';
import { NotfoundComponent } from './Components/notfound/notfound.component';
import { AdminComponent } from './Components/admin/admin.component';
import { AuthGuard } from './Services/auth.guard';
import { CartComponent } from './Components/cart/cart.component';
import { ProductDetailsComponent } from './Components/product/product-details/product-details.component';
import { RootComponent } from './Components/root/root.component';
import { RegisterComponent } from './Components/register/register.component';
import { LoginComponent } from './Components/login/login.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { AboutComponent } from './Components/about/about.component';
import { ProductComponent } from './Components/product/product.component';
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
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: '', redirectTo: 'all-products', pathMatch: 'full' },
      { path: 'all-products', component: AllProductComponent },
      { path: 'add-product', component: AddProductComponent },
      { path: 'edit-product/:id', component: EditProductComponent },
      { path: 'delete-product', component: DeleteProductComponent }
    ]
  },
  { path: '**', component: NotfoundComponent },
];
