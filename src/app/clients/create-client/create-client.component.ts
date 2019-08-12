import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientFormDetailsStepComponent } from '../client-form-steps/client-form-details-step/client-form-details-step.component';
import { ClientFormAddressStepComponent } from '../client-form-steps/client-form-address-step/client-form-address-step.component';
import { ClientFormFamilyMembersStepComponent } from '../client-form-steps/client-form-family-members-step/client-form-family-members-step.component';

@Component({
  selector: 'mifosx-create-client',
  templateUrl: './create-client.component.html',
  styleUrls: ['./create-client.component.scss']
})
export class CreateClientComponent implements OnInit {
  clientTemplate: any;
  @ViewChild(ClientFormDetailsStepComponent) clientFormDetailsStepComponent: ClientFormDetailsStepComponent;
  @ViewChild(ClientFormAddressStepComponent) clientFormAddressStepComponent: ClientFormAddressStepComponent;
  @ViewChild(ClientFormFamilyMembersStepComponent) ClientFormFamilyMembersStepComponent: ClientFormFamilyMembersStepComponent;

  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe((data: { clientTemplateData: any }) => {
      this.clientTemplate = data.clientTemplateData;
    });
  }

  ngOnInit() {
  }

  submit() {
    console.log('here');
    console.log(this.clientFormDetailsStepComponent.clientDetailsStepForm);
    console.log(this.clientFormAddressStepComponent.clientAddressStepForm);
    console.log(this.ClientFormFamilyMembersStepComponent.clientFamilyMembersStepForm);

  }


}
