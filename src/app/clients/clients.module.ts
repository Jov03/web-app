/** Angular Imports */
import { NgModule } from '@angular/core';
import { DatePipe } from '@angular/common';

/** Custom Modules */
import { ClientsRoutingModule } from './clients-routing.module';
import { SharedModule } from 'app/shared/shared.module';
import { PipesModule } from '../pipes/pipes.module';

/** Custom Components */
import { ClientsComponent } from './clients.component';
import { ClientsViewComponent } from './clients-view/clients-view.component';
import { GeneralTabComponent } from './clients-view/general-tab/general-tab.component';
import { FamilyMembersTabComponent } from './clients-view/family-members-tab/family-members-tab.component';
import { AddFamilyMemberComponent } from './clients-view/family-members-tab/add-family-member/add-family-member.component';
import { EditFamilyMemberComponent } from './clients-view/family-members-tab/edit-family-member/edit-family-member.component';
import { IdentitiesTabComponent } from './clients-view/identities-tab/identities-tab.component';
import { UploadDocumentDialogComponent } from './clients-view/upload-document-dialog/upload-document-dialog.component';
import { NotesTabComponent } from './clients-view/notes-tab/notes-tab.component';
import { EditNotesDialogComponent } from './clients-view/edit-notes-dialog/edit-notes-dialog.component';
import { DocumentsTabComponent } from './clients-view/documents-tab/documents-tab.component';
import { DatatableTabComponent } from './clients-view/datatable-tab/datatable-tab.component';
import { MultiRowComponent } from './clients-view/datatable-tab/multi-row/multi-row.component';
import { SingleRowComponent } from './clients-view/datatable-tab/single-row/single-row.component';
import { AddressTabComponent } from './clients-view/address-tab/address-tab.component';
import { CreateClientComponent } from './create-client/create-client.component';
import { ClientFormDetailsStepComponent } from './client-form-steps/client-form-details-step/client-form-details-step.component';
import { ClientFormAddressStepComponent } from './client-form-steps/client-form-address-step/client-form-address-step.component';
import { ClientFormFamilyMembersStepComponent } from './client-form-steps/client-form-family-members-step/client-form-family-members-step.component';
import { ClientFormDatatableStepComponent } from './client-form-datatable-step/client-form-datatable-step.component';
import { SingleRowDatatableStepComponent } from './client-form-datatable-step/single-row-datatable-step/single-row-datatable-step.component';
import { MultiRowDatatableStepComponent } from './client-form-datatable-step/multi-row-datatable-step/multi-row-datatable-step.component';


/**
 * Clients Module
 *
 * All components related to Clients should be declared here.
 */
@NgModule({
  imports: [
    SharedModule,
    ClientsRoutingModule,
    PipesModule
  ],
  declarations: [
    ClientsComponent,
    ClientsViewComponent,
    GeneralTabComponent,
    FamilyMembersTabComponent,
    AddFamilyMemberComponent,
    EditFamilyMemberComponent,
    IdentitiesTabComponent,
    UploadDocumentDialogComponent,
    NotesTabComponent,
    EditNotesDialogComponent,
    DocumentsTabComponent,
    DatatableTabComponent,
    MultiRowComponent,
    SingleRowComponent,
    AddressTabComponent,
    CreateClientComponent,
    ClientFormDetailsStepComponent,
    ClientFormAddressStepComponent,
    ClientFormFamilyMembersStepComponent,
    ClientFormDatatableStepComponent,
    SingleRowDatatableStepComponent,
    MultiRowDatatableStepComponent
  ],
  entryComponents: [
    UploadDocumentDialogComponent,
    EditNotesDialogComponent
  ],
  providers: [DatePipe]

})
export class ClientsModule { }
