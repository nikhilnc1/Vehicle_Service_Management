import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ForgetpasswordComponent } from './components/forgetpassword/forgetpassword.component';
import { RegisterComponent } from './components/register/register.component';
import { ErrorpageComponent } from './components/errorpage/errorpage.component';

const routes: Routes = [
  
  {path:'login',component:LoginComponent},
  {path:'',redirectTo:'/login',pathMatch:'full'},
  {path:'forgetpassword',component:ForgetpasswordComponent},
  // {path:'',component:AdminDashboardComponent},
  
  {path:'admin-dashboard',loadChildren:()=>import('./modules/admin/admin.module').then((m)=>m.AdminModule)},
  {path:'advisor-dashboard',loadChildren:()=>import('./modules/advisor/advisor.module').then((m)=>m.AdvisorModule)},
  
  // {path:'dashboard', component:DashboardComponent},
  {path:'register', component:RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
