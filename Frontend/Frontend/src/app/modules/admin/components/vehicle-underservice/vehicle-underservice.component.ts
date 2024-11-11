import { Component } from '@angular/core';
import { VehicleserviceService } from '../../../../vehicleservice.service';
import { Router } from '@angular/router';
import { Vehicle } from '../../../../vehicle';

@Component({
  selector: 'app-vehicle-underservice',
  templateUrl: './vehicle-underservice.component.html',
  styleUrl: './vehicle-underservice.component.css'
})
export class VehicleUnderserviceComponent {

  vehicles: Vehicle[];
  
  constructor(private vehicleservice: VehicleserviceService, private router: Router){}
  

  ngOnInit(): void{
    this.getVehicle();
  }

  private getVehicle(){
    this.vehicleservice.getVehicleList2().subscribe(data =>{
      this.vehicles = data;
    });
  }


}
