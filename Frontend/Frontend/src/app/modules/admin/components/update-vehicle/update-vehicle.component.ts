import { Component } from '@angular/core';
import { VehicleserviceService } from '../../../../vehicleservice.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Item } from '../../../../item';

@Component({
  selector: 'app-update-vehicle',
  templateUrl: './update-vehicle.component.html',
  styleUrl: './update-vehicle.component.css'
})
export class UpdateVehicleComponent {
  id: number;
  vehicle: any;
  constructor(private Service: VehicleserviceService,
    private router: Router,
    private route: ActivatedRoute,
    private toastr: ToastrService ){}

  ngOnInit(): void{
    this.id = this.route.snapshot.params['id'];
    this.Service.getVehicleById(this.id).subscribe((data:any )=>{
      this.vehicle = data;
      console.log(data);
    });
  }

  onSubmit(){
    this.Service.updateVehicle(this.id, this.vehicle).subscribe(data =>{
      this.toastr.success('', "Updated successfully");
      this.gotoList();
    });
  }

  gotoList(){
    this.router.navigate(['/admin-dashboard/vehicle-list']);
  }


}
