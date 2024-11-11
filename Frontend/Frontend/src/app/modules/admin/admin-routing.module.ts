import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmindashboardComponent } from './components/admindashboard/admindashboard.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddvehicleComponent } from './components/addvehicle/addvehicle.component';
import { VehicleListComponent } from './components/vehicle-list/vehicle-list.component';
import { UpdateVehicleComponent } from './components/update-vehicle/update-vehicle.component';
import { ItemComponent } from './components/item/item.component';
import { UpdateItemComponent } from './components/update-item/update-item.component';
import { VehicleUnderserviceComponent } from './components/vehicle-underservice/vehicle-underservice.component';
import { UpdateStatusComponent } from './components/update-status/update-status.component';
import { AddItemComponent } from './components/add-item/add-item.component';
import { VehicleServiceDoneComponent } from './components/vehicle-service-done/vehicle-service-done.component';
import { InvoiceComponent } from './components/invoice/invoice.component';
import { adminGuard } from '../../auth.guard';

const routes: Routes = [
  { path: 'adminDashboard', component: AdmindashboardComponent, canActivate: [adminGuard] },
  { path: 'dashboard', component: DashboardComponent, canActivate: [adminGuard] },
  { path: 'add-vehicles', component: AddvehicleComponent, canActivate: [adminGuard] },
  { path: 'vehicle-list', component: VehicleListComponent, canActivate: [adminGuard] },
  { path: 'update-vehicle/:id', component: UpdateVehicleComponent, canActivate: [adminGuard] },
  { path: 'item', component: ItemComponent, canActivate: [adminGuard] },
  { path: 'update-item/:id', component: UpdateItemComponent, canActivate: [adminGuard] },
  { path: 'under-service', component: VehicleUnderserviceComponent, canActivate: [adminGuard] },
  { path: 'upadte-status/:id', component: UpdateStatusComponent, canActivate: [adminGuard] },
  { path: 'additem', component: AddItemComponent, canActivate: [adminGuard] },
  { path: 'service-done', component: VehicleServiceDoneComponent, canActivate: [adminGuard] },
  { path: 'invoice/:id', component: InvoiceComponent, canActivate: [adminGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
