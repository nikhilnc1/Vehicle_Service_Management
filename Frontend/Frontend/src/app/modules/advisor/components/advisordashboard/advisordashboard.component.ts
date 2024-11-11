import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-advisordashboard',
  templateUrl: './advisordashboard.component.html',
  styleUrl: './advisordashboard.component.css'
})
export class AdvisordashboardComponent {
logout() {
  console.log('Destroy');
  localStorage.clear();
  this.router.navigate(['/login'], { replaceUrl: true });
}
  constructor(
    private router : Router
  ){
  
}
  
}
