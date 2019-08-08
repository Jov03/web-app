import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientFormFamilyMembersStepComponent } from './client-form-family-members-step.component';

describe('ClientFormFamilyMembersStepComponent', () => {
  let component: ClientFormFamilyMembersStepComponent;
  let fixture: ComponentFixture<ClientFormFamilyMembersStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientFormFamilyMembersStepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientFormFamilyMembersStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
