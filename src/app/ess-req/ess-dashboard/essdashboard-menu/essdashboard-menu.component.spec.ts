import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ESSdashboardMenuComponent } from './essdashboard-menu.component';

describe('ESSdashboardMenuComponent', () => {
  let component: ESSdashboardMenuComponent;
  let fixture: ComponentFixture<ESSdashboardMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ESSdashboardMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ESSdashboardMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
