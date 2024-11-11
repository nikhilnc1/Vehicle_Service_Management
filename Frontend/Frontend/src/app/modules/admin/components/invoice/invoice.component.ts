import { Component, ViewChild } from '@angular/core';
import { Item } from '../../../../item';
import {  NgxPrintModule } from 'ngx-print';
import { ActivatedRoute } from '@angular/router';
import { CartItem } from '../../../../cart-item';
import { VehicleserviceService } from '../../../../vehicleservice.service';
import { Vehicle } from '../../../../vehicle';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrl: './invoice.component.css'
})
export class InvoiceComponent {
    
  vehicles: Vehicle;
  items: CartItem[];
  id: number;
  subtotal: number = 0;
  serviceCost: number = 500;
  AdminName : string;
  userEmail :string;
  saEmail: string;
  constructor(private vehicleService: VehicleserviceService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    if (typeof localStorage !== 'undefined') {
      
      this.AdminName = localStorage.getItem('userName');
      this.userEmail = localStorage.getItem('userEmail');
    } else {
      console.error('localStorage is not available');
    }
    
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    this.vehicleService.getItemsById(this.id).subscribe((data: any) => {
      this.items = data;
      console.log(data);
      this.calculateSubtotal();
    });

    this.vehicleService.getVehicleById(this.id).subscribe((data:any )=>{
      this.vehicles = data;
      console.log(data);
    });
  }

  calculateSubtotal(): void {
    this.subtotal = this.items.reduce((total, item) => total + (item.itemCost * item.quantity), 0);
  }

  calculateTotal(): number {
    return this.subtotal + this.serviceCost;
  }

  printInvoice() {
    const printContent = document.getElementById('print-section');
    const WinPrint = window.open('', '', 'width=800,height=600');
    WinPrint.document.write(printContent.outerHTML);
    WinPrint.document.close();
    WinPrint.focus();
    WinPrint.print();
    WinPrint.close();
  }

  
}
