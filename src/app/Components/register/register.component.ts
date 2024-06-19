import { AuthServiceService } from './../../Services/auth-service.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup ,Validators} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router'; 
import { HttpClientModule } from '@angular/common/http'; 


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, HttpClientModule], 
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {

  constructor(
    private _AuthServiceService: AuthServiceService,
    private router: Router 
  ) { }
  
  isLoading:boolean = false;

  registerForm: FormGroup = new FormGroup ({
    name : new FormControl(null , [Validators.required, Validators.minLength(3)]),
    email : new FormControl(null , [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
    phone: new FormControl(null, [Validators.required, Validators.pattern(/^01[0125][0-9]{8}$/)]),
    address: new FormControl(null, Validators.required),
    // role: new FormControl('', Validators.required),
  });

  handelregister(registerForm: FormGroup){
    this.isLoading=true;
    if(registerForm.valid){
      this.isLoading=false;
      this._AuthServiceService.register(registerForm.value).subscribe({
        next:(response) => {
          console.log(response);
          this.router.navigate(['/login']);

        },
        error:(error) => this.isLoading=true
      });
    }
  }
}
