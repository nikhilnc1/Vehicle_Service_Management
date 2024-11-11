import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdvisorRoutingModule } from './advisor-routing.module';
import { AdvisordashboardComponent } from './components/advisordashboard/advisordashboard.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AdvisorItemlistComponent } from './components/advisor-itemlist/advisor-itemlist.component';
import { AdvisorVehiclelistComponent } from './components/advisor-vehiclelist/advisor-vehiclelist.component';


@NgModule({
  declarations: [
    AdvisordashboardComponent,
    DashboardComponent,
    AdvisorItemlistComponent,
    AdvisorVehiclelistComponent,
  ],
  imports: [
    CommonModule,
    AdvisorRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    FormsModule
  ]
})
export class AdvisorModule { }
