import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../../../../vehicle';
import { VehicleserviceService } from '../../../../vehicleservice.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';


@Component({
  selector: 'app-advisor-vehiclelist',
  templateUrl: './advisor-vehiclelist.component.html',
  styleUrl: './advisor-vehiclelist.component.css'
})
export class AdvisorVehiclelistComponent implements OnInit{
  vehicles: Vehicle[];
  email: any;
  id: number;

  constructor(private vehicleservice: VehicleserviceService, private router: Router, private toastr: ToastrService){}
  
  ngOnInit(): void {
    this.getVehicle();
     
  }

  private getVehicle(){
    if (typeof window !== 'undefined' && window.localStorage) {
      this.email = localStorage.getItem('userEmail'); 
    }
    this.vehicleservice.getVehicleListAsvisor(this.email).subscribe(data =>{
    this.vehicles = data;
    });
  }

  updateCart(id: number) {
    this.router.navigate(['/advisor-dashboard/advisorDashboard/advisoritems', id])
  }

}
