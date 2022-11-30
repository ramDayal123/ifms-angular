import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EssPersonalComponent } from './ess-personal.component';

describe('EssPersonalComponent', () => {
  let component: EssPersonalComponent;
  let fixture: ComponentFixture<EssPersonalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EssPersonalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EssPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
