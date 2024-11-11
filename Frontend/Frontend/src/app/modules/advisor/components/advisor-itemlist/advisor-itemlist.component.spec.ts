import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvisorItemlistComponent } from './advisor-itemlist.component';

describe('AdvisorItemlistComponent', () => {
  let component: AdvisorItemlistComponent;
  let fixture: ComponentFixture<AdvisorItemlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdvisorItemlistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdvisorItemlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
