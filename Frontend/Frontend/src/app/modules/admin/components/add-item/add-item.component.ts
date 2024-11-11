import { Component } from '@angular/core';
import { Item } from '../../../../item';
import { VehicleserviceService } from '../../../../vehicleservice.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrl: './add-item.component.css'
})
export class AddItemComponent {
  items: Item[];
  item: Item =new Item;
  constructor(private Service: VehicleserviceService,
    private router: Router,
    private toastr: ToastrService){}

  saveItem(){
    this.Service.createItem(this.item).subscribe(data =>{
        console.log(data);
    });
  }
  onSubmit(){
    console.log(this.item);
    this.saveItem();
    this.toastr.success('', "Added successfully");
    this.router.navigate(['/admin-dashboard/item'])
  }

}
