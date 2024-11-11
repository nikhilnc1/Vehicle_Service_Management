import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleUnderserviceComponent } from './vehicle-underservice.component';

describe('VehicleUnderserviceComponent', () => {
  let component: VehicleUnderserviceComponent;
  let fixture: ComponentFixture<VehicleUnderserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VehicleUnderserviceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VehicleUnderserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
