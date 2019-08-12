import { Component, OnInit, Input } from '@angular/core';
import { FormfieldBase } from 'app/shared/form-dialog/formfield/model/formfield-base';
import { FormGroup, FormControl, Validators } from '@angular/forms';

const layoutGap = 2;

@Component({
  selector: 'mifosx-single-row-datatable-step',
  templateUrl: './single-row-datatable-step.component.html',
  styleUrls: ['./single-row-datatable-step.component.scss']
})
export class SingleRowDatatableStepComponent implements OnInit {


  form: FormGroup;
  formfields: FormfieldBase[];
  pristine: boolean;

  @Input() datatableTemplate: any;
  constructor() {

  }

  ngOnInit() {
    this.formfields = this.datatableTemplate.sort((formfieldA: FormfieldBase, formfieldB: FormfieldBase) => formfieldA.order - formfieldB.order);
    this.form = this.createFormGroup(this.formfields);
  }

  createFormGroup(formfields: FormfieldBase[]) {
    const group: any = {};

    formfields.forEach(formfield => {
      group[formfield.controlName] = formfield.required ? new FormControl(formfield.value, Validators.required) : new FormControl(formfield.value);
    });

    return new FormGroup(group);
  }
}
