import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientFormDetailsStepComponent } from './client-form-details-step.component';

describe('ClientFormDetailsStepComponent', () => {
  let component: ClientFormDetailsStepComponent;
  let fixture: ComponentFixture<ClientFormDetailsStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientFormDetailsStepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientFormDetailsStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
