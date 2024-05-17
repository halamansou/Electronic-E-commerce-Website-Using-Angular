import { AuthServiceService } from './../../Services/auth-service.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup ,Validators} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router'; 
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, HttpClientModule,RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})


export class LoginComponent {
  
  constructor(
    private authService: AuthServiceService,
    private router: Router 
  ) { }
  
  isLoading:boolean = false;
  loginError: string = '';

  loginForm: FormGroup = new FormGroup ({
    email : new FormControl(null , [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
    
  });

  handelLogin() {
    this.isLoading = true;
    if(this.loginForm.valid){
      this.authService.login(this.loginForm.value).subscribe({
        next: (response) => {
          console.log(response);
          if (response) {
            localStorage.setItem('userToken',response.token);
            this.authService.decodeUserData();
            this.router.navigate(['/']);
          } else {
            this.loginError = 'Email not registered or password does not match.';
          }
          this.isLoading = false;
        },
        error: (error) => {
          console.error(error);
          this.loginError = 'Email not registered or password does not match.';
          this.isLoading = false;
        }
      });
    }
  }
  

}