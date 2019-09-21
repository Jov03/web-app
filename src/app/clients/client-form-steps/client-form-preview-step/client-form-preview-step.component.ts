import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';



@Component({
  selector: 'mifosx-client-form-preview-step',
  templateUrl: './client-form-preview-step.component.html',
  styleUrls: ['./client-form-preview-step.component.scss']
})
export class ClientFormPreviewStepComponent implements OnInit {

  @Input() clientDetailsStepForm: any;
  @Input() clientAddressStepForm: any;
  @Input() clientFamilyMembersStepForm: any;
  @Input() clientDatatableForms: any;
  @Output() submit = new EventEmitter();


  constructor() {
  }

  ngOnInit() {
    console.log(JSON.stringify(this.clientFamilyMembersStepForm));
    console.log(JSON.stringify(this.clientAddressStepForm));

  }


  showData() {
    console.log(this.clientDatatableForms);
  }

}
