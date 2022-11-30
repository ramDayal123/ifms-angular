import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EssSiloanDeductionComponent } from './ess-siloan-deduction.component';

describe('EssSiloanDeductionComponent', () => {
  let component: EssSiloanDeductionComponent;
  let fixture: ComponentFixture<EssSiloanDeductionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EssSiloanDeductionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EssSiloanDeductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
