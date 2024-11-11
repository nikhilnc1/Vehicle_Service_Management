import { Component } from '@angular/core';
import { Item } from '../../../../item';
import { VehicleserviceService } from '../../../../vehicleservice.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent {
  items: Item[];
  item: Item =new Item;
  constructor(private Service: VehicleserviceService,
    private router: Router,
    private toastr: ToastrService){}

  ngOnInit(): void{
    this.getItem();
  }
  
  private getItem(){
    this.Service.getItemList().subscribe(data =>{
      this.items = data;
    });
  }
  

  updateItem(id: number){
    this.router.navigate(['/admin-dashboard/update-item', id]);
  }

  deleteItem(id: number) {
    const confirmDelete = confirm('Are you sure you want to delete this item?');

    if (confirmDelete) {
        
        this.Service.deleteItem(id).subscribe(
            (data) => {
               this.toastr.success('', "Deleted successfully");
                console.log('Item deleted successfully:', data);
                this.getItem();
            });
    } else {
        console.log('Deletion canceled by user.');
    }
}
}
