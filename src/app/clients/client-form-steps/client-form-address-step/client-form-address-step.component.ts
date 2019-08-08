import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'mifosx-client-form-address-step',
  templateUrl: './client-form-address-step.component.html',
  styleUrls: ['./client-form-address-step.component.scss']
})
export class ClientFormAddressStepComponent implements OnInit {
  @Input() clientAddressFormTemplate: any;
  clientAddressForm: any;

  constructor(private formBuilder: FormBuilder) {
    this.createClientAddressForm();
  }

  ngOnInit() {
  }

  addAddress() {
    this.clientAddressForm.get('address').push(this.getAddressFormGroup());
  }

  getAddressFormGroup(): FormGroup {
    return this.formBuilder.group({
      'addressTypeId': [''],
      'street': [''],
      'addressLine1': [''],
      'addressLine2': [''],
      'addressLine3': [''],
      'city': [''],
      'countryId': [''],
      'countryDistrict': [''],
      'townVillage': [],
      'stateProvinceId': [''],
      'postalCode': ['']
    });
  }

  createClientAddressForm() {
    this.clientAddressForm = this.formBuilder.group({
      'address': this.formBuilder.array([this.getAddressFormGroup()])
    });
  }
}

