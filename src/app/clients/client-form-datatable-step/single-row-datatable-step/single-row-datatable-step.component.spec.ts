import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleRowDatatableStepComponent } from './single-row-datatable-step.component';

describe('SingleRowDatatableStepComponent', () => {
  let component: SingleRowDatatableStepComponent;
  let fixture: ComponentFixture<SingleRowDatatableStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleRowDatatableStepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleRowDatatableStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
