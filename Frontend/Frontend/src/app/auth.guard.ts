import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { VehicleserviceService } from './vehicleservice.service';

export const adminGuard: CanActivateFn = () => {
  const authService = inject(VehicleserviceService);
  const router = inject(Router);

  if (authService.isAuthenticated()) {
    const role = authService.getUserRole();
    if (role === 'ADMIN') {
      return true;
    } else {
      router.navigate(['/login']);
      return false;
    }
  } else {
    router.navigate(['/login']);
    return false;
  }
};

export const serviceAdvisorGuard: CanActivateFn = () => {
  const authService = inject(VehicleserviceService);
  const router = inject(Router);

  if (authService.isAuthenticated()) {
    const role = authService.getUserRole();
    if (role === 'SERVICEADVISOR') {
      return true;
    } else {
      router.navigate(['/login']);
      return false;
    }
  } else {
    router.navigate(['/login']);
    return false;
  }
};
