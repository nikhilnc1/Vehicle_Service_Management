import { Component } from '@angular/core';
import { VehicleserviceService } from '../../../../vehicleservice.service';
import { Vehicle } from '../../../../vehicle';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrl: './vehicle-list.component.css'
})
export class VehicleListComponent {
  vehicles: Vehicle[];
  
  constructor(private vehicleservice: VehicleserviceService, private router: Router, private toastr: ToastrService){}
  

  ngOnInit(): void{
    this.getVehicle();
  }

  private getVehicle(){
    this.vehicleservice.getVehicleList().subscribe(data =>{
      this.vehicles = data;
    });
  }

  updateVehicle(id: number){
    this.router.navigate(['admin-dashboard/update-vehicle', id]);
  }

  updateStatus(id: number){
    this.router.navigate(['admin-dashboard/upadte-status', id])
  }

  deleteVehicle(id: number) {
    const confirmDelete = confirm('Are you sure you want to delete this vehicle?');
    if (confirmDelete) {
        this.vehicleservice.deleteVehicle(id).subscribe(
            (data) => {
                 this.toastr.success('', "Deleted successfully");
                this.getVehicle(); 
          });
    } else { 
        console.log('Deletion canceled by user.');
    }
}

}

