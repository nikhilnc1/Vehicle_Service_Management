import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AddvehicleComponent } from './components/addvehicle/addvehicle.component';
import { AdmindashboardComponent } from './components/admindashboard/admindashboard.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { VehicleListComponent } from './components/vehicle-list/vehicle-list.component';
import { UpdateVehicleComponent } from './components/update-vehicle/update-vehicle.component';
import { ItemComponent } from './components/item/item.component';
import { UpdateItemComponent } from './components/update-item/update-item.component';
import { VehicleUnderserviceComponent } from './components/vehicle-underservice/vehicle-underservice.component';
import { UpdateStatusComponent } from './components/update-status/update-status.component';
import { AddItemComponent } from './components/add-item/add-item.component';
import { VehicleServiceDoneComponent } from './components/vehicle-service-done/vehicle-service-done.component';
import { InvoiceComponent } from './components/invoice/invoice.component';


@NgModule({
  declarations: [
    AddvehicleComponent,
    AdmindashboardComponent,
    DashboardComponent,
    VehicleListComponent,
    UpdateVehicleComponent,
    ItemComponent,
    UpdateItemComponent,
    VehicleUnderserviceComponent,
    UpdateStatusComponent,
    AddItemComponent,
    VehicleServiceDoneComponent,
    InvoiceComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    FormsModule
  ]
})
export class AdminModule { }
