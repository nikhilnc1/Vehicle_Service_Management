import {ChangeDetectionStrategy, Component } from '@angular/core';
import { VehicleserviceService } from '../../vehicleservice.service';
import { Router } from '@angular/router';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: VehicleserviceService, private router: Router) {}

  ngOnInit(): void {
    // Check if localStorage is available before accessing it
    if (typeof window !== 'undefined' && window.localStorage) {
      let token = localStorage.getItem('token');
      let role = localStorage.getItem('userRole');
      if (token) {
        if (role === 'ADMIN') {
          this.router.navigate(['/admin-dashboard/dashboard']);
        } else if (role === 'SERVICEADVISOR') {
          this.router.navigate(['/advisor-dashboard/advisorDashboard/advisorvehicle']);
        }
      }
    }
  }

  login() {
    this.authService.login(this.email, this.password).subscribe(
      (response: any) => {
        console.log('done');
        // Store user details in localStorage only if successful login
        localStorage.setItem('token', response.jwt);
        localStorage.setItem('userId', response.userId);
        localStorage.setItem('userRole', response.role);
        localStorage.setItem('userName', response.name);
        localStorage.setItem('userEmail', response.email);
        console.log(response.jwt, response.role);
        console.log(response);

        const userRole = response.role;
        if (userRole === 'ADMIN') {
          this.router.navigate(['/admin-dashboard/dashboard']);
          console.log('admin');
        } else if (userRole === 'SERVICEADVISOR') {
          this.router.navigate(['/advisor-dashboard/advisorDashboard/advisorvehicle']);
          console.log('service');
        } else {
          // Handle invalid role or other error cases
          console.error('Invalid role received:', userRole);
          // You can display an error message or redirect to a login error page
        }
      },
      (error) => {
        // Handle login errors (e.g., display error message)
        console.error('Login error:', error);
      }
    );
  }
}
