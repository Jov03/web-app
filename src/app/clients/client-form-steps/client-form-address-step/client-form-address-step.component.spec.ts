import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientFormAddressStepComponent } from './client-form-address-step.component';

describe('ClientFormAddressStepComponent', () => {
  let component: ClientFormAddressStepComponent;
  let fixture: ComponentFixture<ClientFormAddressStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientFormAddressStepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientFormAddressStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
