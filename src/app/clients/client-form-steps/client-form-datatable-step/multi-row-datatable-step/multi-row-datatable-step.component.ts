import { Component, OnInit, Input, OnChanges, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { MatDialog } from '@angular/material';
import { FormfieldBase } from 'app/shared/form-dialog/formfield/model/formfield-base';
import { DatePipe } from '@angular/common';

/** Custom Components */
import { FormDialogComponent } from 'app/shared/form-dialog/form-dialog.component';


@Component({
  selector: 'mifosx-multi-row-datatable-step',
  templateUrl: './multi-row-datatable-step.component.html',
  styleUrls: ['./multi-row-datatable-step.component.scss']
})
export class MultiRowDatatableStepComponent implements OnInit, OnChanges {
  @ViewChild('dataTable') dataTableRef: MatTable<Element>;
  @Input() datatableTemplate: any;
  @Input() datatableName: string;
  @Input() dateTransformColumns: any[];
  @Input() dataTableEntryObjectTemplate: any;
  datatableColumns: string[] = [];
  datatableData: any[];
  clientId: string;
  showDeleteBotton: boolean;

  constructor(
    private datePipe: DatePipe,
    private dialog: MatDialog) {

  }

  ngOnInit() {
  }

  ngOnChanges() {
    console.log(this.datatableTemplate);
    this.datatableColumns = this.datatableTemplate.map((columnHeader: any) => {
      return columnHeader.controlName;
    });
    this.datatableData = [];

  }

  add() {

    const formfields: FormfieldBase[] = this.datatableTemplate;
    const data = {
      title: 'Add ' + this.datatableName,
      formfields: formfields
    };
    const addDialogRef = this.dialog.open(FormDialogComponent, { data });
    addDialogRef.afterClosed().subscribe((response: any) => {
      if (response.data) {
        // format Dates
        this.dateTransformColumns.forEach((column) => {
          response.data.value[column] = this.datePipe.transform(response.data.value[column], this.dataTableEntryObjectTemplate.dateFormat);
        });
        this.datatableData.push(response.data.value);
        this.dataTableRef.renderRows();
      }
    });
  }


  get datatableForm() {
    const dataTableEntryArray: any[] = [];
    const dataTableEntryObject = this.dataTableEntryObjectTemplate;
    dataTableEntryArray.push(this.datatableData.map((data) => {
      return { registeredTableName: this.datatableName, ...dataTableEntryObject, data: data };
    }));
    return dataTableEntryArray;
  }

}

