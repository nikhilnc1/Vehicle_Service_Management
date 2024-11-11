import { Component } from '@angular/core';
import { VehicleserviceService } from '../../vehicleservice.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  constructor(private authService: VehicleserviceService, private router: Router,private toastr: ToastrService) {}
name: '';
email: '';
password: '';
role: '';

register() {
  this.authService.register(this.name, this.email, this.password, this.role).subscribe(
    (response: any) => {
      console.log('Registration successful!', response);
      this.toastr.success('', "Registration successful");
      this.router.navigate(['/login']);
      
    },
    (error: any) => {
      console.error('Registration failed:', error);
    }
  );
  
}

}
