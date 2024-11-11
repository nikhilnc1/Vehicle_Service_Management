import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvisorVehiclelistComponent } from './advisor-vehiclelist.component';

describe('AdvisorVehiclelistComponent', () => {
  let component: AdvisorVehiclelistComponent;
  let fixture: ComponentFixture<AdvisorVehiclelistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdvisorVehiclelistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdvisorVehiclelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
