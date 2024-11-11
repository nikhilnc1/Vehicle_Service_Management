import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleServiceDoneComponent } from './vehicle-service-done.component';

describe('VehicleServiceDoneComponent', () => {
  let component: VehicleServiceDoneComponent;
  let fixture: ComponentFixture<VehicleServiceDoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VehicleServiceDoneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VehicleServiceDoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
