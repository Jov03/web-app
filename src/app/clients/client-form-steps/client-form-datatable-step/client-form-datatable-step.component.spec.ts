import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientFormDatatableStepComponent } from './client-form-datatable-step.component';

describe('ClientFormDatatableStepComponent', () => {
  let component: ClientFormDatatableStepComponent;
  let fixture: ComponentFixture<ClientFormDatatableStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientFormDatatableStepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientFormDatatableStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
