import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'mifosx-client-form-details-step',
  templateUrl: './client-form-details-step.component.html',
  styleUrls: ['./client-form-details-step.component.scss']
})
export class ClientFormDetailsStepComponent implements OnInit {
  @Input() clientTemplate: any;
  clientDetailsForm: any;

  constructor(private formBuilder: FormBuilder) {
    this.createClientDetailsForm();
  }

  ngOnInit() {
    console.log(this.clientTemplate);
  }

  createClientDetailsForm() {
    this.clientDetailsForm = this.formBuilder.group({
      'officeId': ['', Validators.required],
      'staffId': [''],
      'legalFormId': [''],
      'firstname': ['', Validators.required],
      'middlename': [''],
      'lastname': ['', Validators.required],
      'mobileNo': [''],
      'genderId': [''],
      'clientTypeId': [''],
      'clientClassificationId': [''],
      'externalId': [''],
      'active': [''],
      'activationDate': [''],
      'submittedOnDate': [''],
      'dateOfBirth': [''],
      'savingsProduct': [''],
      'savingsProductId': ['']
    });
  }

  get clientDetailsStepForm() {
    return this.clientDetailsForm.value;

  }

}
