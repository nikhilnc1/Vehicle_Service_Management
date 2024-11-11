import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrl: './admindashboard.component.css'
})
export class AdmindashboardComponent {
  constructor(
    private router : Router
  ){

  }
  logout() {
    console.log('Destroy');
    localStorage.clear();
    this.router.navigate(['/login'], { replaceUrl: true });
  }

}
