import { Component } from '@angular/core';
import { VehicleserviceService } from '../../../../vehicleservice.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-update-status',
  templateUrl: './update-status.component.html',
  styleUrl: './update-status.component.css'
})
export class UpdateStatusComponent {
  

  AdvisorList: any[];
  id: any;
  vehicle: any;

  constructor(private service:VehicleserviceService, private route : ActivatedRoute, private router: Router, private toastr: ToastrService){}

  ngOnInit(): void{
    this.service.getAdvisorList().subscribe((data:any[])=>{
      this.AdvisorList=data;
    });
    this.id = this.route.snapshot.params['id'];
    this.service.getVehicleById(this.id).subscribe((data:any )=>{
      this.vehicle = data;
      console.log(data);
    });
  }

  
  onSubmit(){
    this.service.updateVehicleStatus(this.id, this.vehicle).subscribe(data =>{
      this.toastr.success('', "Updated successfully");
      this.gotoList();
    });
  
  }

  gotoList(){
    this.router.navigate(['/admin-dashboard/vehicle-list']);
  }

}
