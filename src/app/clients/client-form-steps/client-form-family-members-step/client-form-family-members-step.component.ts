import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'mifosx-client-form-family-members-step',
  templateUrl: './client-form-family-members-step.component.html',
  styleUrls: ['./client-form-family-members-step.component.scss']
})
export class ClientFormFamilyMembersStepComponent implements OnInit {
  @Input() clientFamilyMemberFormTemplate: any;
  @Output() submit = new EventEmitter();
  clientFamilyMembersForm: any;

  constructor(private formBuilder: FormBuilder) {
    this.createClientFamilyMembersForm();
  }

  ngOnInit() {
  }

  addFamilyMember() {
    this.clientFamilyMembersForm.get('familyMembers').push(this.getFamilyMemberGroup());
  }

  getFamilyMemberGroup(): FormGroup {
    return this.formBuilder.group({
      'firstName': ['', Validators.required],
      'middleName': [''],
      'lastName': ['', Validators.required],
      'qualification': [''],
      'mobileNumber': [''],
      'age': ['', Validators.required],
      'isDependent': [''],
      'relationshipId': ['', Validators.required],
      'genderId': ['', Validators.required],
      'professionId': [''],
      'maritalStatusId': [''],
      'dateOfBirth': ['', Validators.required]
    });
  }

  createClientFamilyMembersForm() {
    this.clientFamilyMembersForm = this.formBuilder.group({
      'familyMembers': this.formBuilder.array([this.getFamilyMemberGroup()])
    });
  }

}
