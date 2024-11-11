import { Component } from '@angular/core';
import { VehicleserviceService } from '../../../../vehicleservice.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from '../../../../item';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-update-item',
  templateUrl: './update-item.component.html',
  styleUrl: './update-item.component.css'
})
export class UpdateItemComponent {

  id: number;
  item: Item =new Item();
  constructor(private Service: VehicleserviceService,
    private router: Router,
    private route: ActivatedRoute,
    private toastr: ToastrService ){}

  ngOnInit(): void{
    this.id = this.route.snapshot.params['id'];
    this.Service.getItemById(this.id).subscribe((data:any )=>{
      this.item = data;
      console.log(data);
    });
  }

  onSubmit(){
    this.Service.updateItem(this.id, this.item).subscribe(data =>{
      this.toastr.success('', "Updated successfully");
      this.gotoList();
    });
  }

  gotoList(){
    this.router.navigate(['/admin-dashboard/item']);
  }
}
