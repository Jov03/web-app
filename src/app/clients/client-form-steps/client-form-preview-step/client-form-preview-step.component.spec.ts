import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientFormPreviewStepComponent } from './client-form-preview-step.component';

describe('ClientFormPreviewStepComponent', () => {
  let component: ClientFormPreviewStepComponent;
  let fixture: ComponentFixture<ClientFormPreviewStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientFormPreviewStepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientFormPreviewStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
