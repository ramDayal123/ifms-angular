import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ESSRequestForwardComponent } from './ess-request-forward.component';

describe('ESSRequestForwardComponent', () => {
  let component: ESSRequestForwardComponent;
  let fixture: ComponentFixture<ESSRequestForwardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ESSRequestForwardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ESSRequestForwardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
