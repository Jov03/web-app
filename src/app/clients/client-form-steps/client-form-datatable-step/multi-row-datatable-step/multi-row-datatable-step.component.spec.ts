import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiRowDatatableStepComponent } from './multi-row-datatable-step.component';

describe('MultiRowDatatableStepComponent', () => {
  let component: MultiRowDatatableStepComponent;
  let fixture: ComponentFixture<MultiRowDatatableStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiRowDatatableStepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiRowDatatableStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
