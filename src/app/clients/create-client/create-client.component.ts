import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientFormDetailsStepComponent } from '../client-form-steps/client-form-details-step/client-form-details-step.component';

@Component({
  selector: 'mifosx-create-client',
  templateUrl: './create-client.component.html',
  styleUrls: ['./create-client.component.scss']
})
export class CreateClientComponent implements OnInit {
  clientTemplate: any;
  @ViewChild(ClientFormDetailsStepComponent) clientFormDetailsStepComponent: ClientFormDetailsStepComponent;


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

  }


}
