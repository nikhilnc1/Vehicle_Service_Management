import { Component, EventEmitter, Input, Output } from '@angular/core';
import { VehicleserviceService } from '../../../../vehicleservice.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Item } from '../../../../item';
import { CartService } from './service/cart.service';
import { CartItem } from '../../../../cart-item';
import { Vehicle } from '../../../../vehicle';

@Component({
  selector: 'app-advisor-itemlist',
  templateUrl: './advisor-itemlist.component.html',
  styleUrl: './advisor-itemlist.component.css'
})
export class AdvisorItemlistComponent {

  items: Item[];
  items1: Item[];
  item: Item;
  id: any;
  quantity: any;
  vId: any;
  vehicle: Vehicle;
  serviceStatus: any;
  

  constructor(private Service: VehicleserviceService,
    private cartService: CartService,
    private router: Router,
    private toastr: ToastrService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getItem();
    this.DisplayCartItem();
    this.id = this.route.snapshot.params['id'];
    
    this.Service.getVehicleById(this.id).subscribe((data:any )=>{
      this.vehicle = data;
      console.log(data);
    });
  }


  addToCart(item: any) {
    this.cartService.addToCart(item);

    
  }

  DisplayCartItem() {
    this.items1 = this.cartService.getItems();
  }

  removeItem(id: number) {
    this.cartService.removeItem(id);
  }

  onSubmit() {
    const items = this.items1;
    let vhicle_id = this.id = this.route.snapshot.params['id'];
    // Set the default value for vehicle.serviceStatus to "Completed"
    this.vehicle.serviceStatus = "Completed";

    this.Service.updateVehicleStatusAdv(this.id, this.vehicle).subscribe(data =>{
      
      this.toastr.success('', "Updated successfully");
    });
    

    for (const item of items) {
      console.log(vhicle_id)
      this.Service.addServiceRecord(item.id, item.itemName, item.itemCost, item.quantity, this.id)
        .subscribe((cartItems: any) => {

        });
    }
    this.cartService.clearCart();
    this.router.navigate(['/advisor-dashboard/advisorDashboard/advisorvehicle']);
  }
  


  DeleteItemFromCart(item) {

  }
  private getItem() {
    this.Service.getItemList().subscribe(data => {
      this.items = data;
    });
  }


  increment(itemID: number) {
    this.cartService.increaseItemQuantity(itemID);
  }

  decrement(itemID: number) {

    this.cartService.decreaseItemQuantity(itemID);

  }

  // private emitQuantityChange() {
  //   this.quantityChange.emit(this.quantity);
  // }

}
