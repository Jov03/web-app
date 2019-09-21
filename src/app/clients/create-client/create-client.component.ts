import { Component, OnInit, ViewChild, QueryList, ViewChildren, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientFormDetailsStepComponent } from '../client-form-steps/client-form-details-step/client-form-details-step.component';
import { ClientFormAddressStepComponent } from '../client-form-steps/client-form-address-step/client-form-address-step.component';
import { ClientFormFamilyMembersStepComponent } from '../client-form-steps/client-form-family-members-step/client-form-family-members-step.component';
import { ClientFormDatatableStepComponent } from '../client-form-steps/client-form-datatable-step/client-form-datatable-step.component';
import { MatStepper } from '@angular/material';

@Component({
  selector: 'mifosx-create-client',
  templateUrl: './create-client.component.html',
  styleUrls: ['./create-client.component.scss']
})
export class CreateClientComponent implements OnInit {
  clientTemplate: any;
  clientDatatableFormArray: any[] = [];
  @ViewChild(ClientFormDetailsStepComponent) clientFormDetailsStepComponent: ClientFormDetailsStepComponent;
  @ViewChild(ClientFormAddressStepComponent) clientFormAddressStepComponent: ClientFormAddressStepComponent;
  @ViewChild(ClientFormFamilyMembersStepComponent) clientFormFamilyMembersStepComponent: ClientFormFamilyMembersStepComponent;
  @ViewChildren(ClientFormDatatableStepComponent) clientFormDatatableStepComponents: QueryList<ClientFormDatatableStepComponent>;
  @ViewChild('clientFormStepper') clientFormStepper: MatStepper;


  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe((data: { clientTemplateData: any }) => {
      this.clientTemplate = data.clientTemplateData;
    });
  }

  ngOnInit() {
  }

  get clientDetailsStepForm() {
    return this.clientFormDetailsStepComponent.clientDetailsStepForm;
  }

  get clientAddressStepForm() {
    return this.clientFormAddressStepComponent.clientAddressStepForm;
  }

  get clientFamilyMembersStepForm() {
    return this.clientFormFamilyMembersStepComponent.clientFamilyMembersStepForm;
  }

  get clientDatatableForms() {
    return this.clientDatatableFormArray;
  }

  updateClientDatatableFormData() {
    this.clientDatatableFormArray = this.clientFormDatatableStepComponents.map((clientFormDatatableStepComponent: any) => {
      return clientFormDatatableStepComponent.clientDatatableForm;
    });
  }

  submit() {
    console.log('here');
    console.log(this.clientFormDetailsStepComponent.clientDetailsStepForm);
    console.log(this.clientFormAddressStepComponent.clientAddressStepForm);
    console.log(this.clientFormFamilyMembersStepComponent.clientFamilyMembersStepForm);

  }
  onStepChange(event: any) {
    if (event.selectedStep === this.clientFormStepper.steps.last) {
      this.updateClientDatatableFormData();
    }
  }

}
