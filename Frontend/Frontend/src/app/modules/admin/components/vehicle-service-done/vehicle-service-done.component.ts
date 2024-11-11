import { Component } from '@angular/core';
import { VehicleserviceService } from '../../../../vehicleservice.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Vehicle } from '../../../../vehicle';

@Component({
  selector: 'app-vehicle-service-done',
  templateUrl: './vehicle-service-done.component.html',
  styleUrl: './vehicle-service-done.component.css'
})
export class VehicleServiceDoneComponent {

  vehicles: Vehicle[];
  
  constructor(private vehicleservice: VehicleserviceService, private router: Router, private toastr: ToastrService){}
  

  ngOnInit(): void{
    this.getVehicle();
  }

  private getVehicle(){
    this.vehicleservice.getVehicleList3().subscribe(data =>{
      this.vehicles = data;
    });
  }

  printBill(id: number){
    this.router.navigate(['/admin-dashboard/invoice', id]);
  }
  

  

}
