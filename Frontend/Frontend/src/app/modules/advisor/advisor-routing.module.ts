import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdvisordashboardComponent } from './components/advisordashboard/advisordashboard.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AdvisorItemlistComponent } from './components/advisor-itemlist/advisor-itemlist.component';
import { AdvisorVehiclelistComponent } from './components/advisor-vehiclelist/advisor-vehiclelist.component';
import { serviceAdvisorGuard } from '../../auth.guard';

const routes: Routes = [
  { path: 'advisorDashboard', component: DashboardComponent, canActivate: [serviceAdvisorGuard],
    children: [
      { path: 'advisoritems/:id', component: AdvisorItemlistComponent },
      { path: 'advisorvehicle', component: AdvisorVehiclelistComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdvisorRoutingModule { }
