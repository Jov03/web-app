import { Component, OnInit, Input, ViewChild, Output } from '@angular/core';
import { InputBase } from 'app/shared/form-dialog/formfield/model/input-base';
import { SelectBase } from 'app/shared/form-dialog/formfield/model/select-base';
import { CheckboxBase } from 'app/shared/form-dialog/formfield/model/checkbox-base';
import { SingleRowDatatableStepComponent } from './single-row-datatable-step/single-row-datatable-step.component';
import { MultiRowDatatableStepComponent } from './multi-row-datatable-step/multi-row-datatable-step.component';

@Component({
  selector: 'mifosx-client-form-datatable-step',
  templateUrl: './client-form-datatable-step.component.html',
  styleUrls: ['./client-form-datatable-step.component.scss']
})
export class ClientFormDatatableStepComponent implements OnInit {
  @Input() datatableTemplate: any;
  @ViewChild(SingleRowDatatableStepComponent) singleRowDatatableStepComponent: SingleRowDatatableStepComponent;
  @ViewChild(MultiRowDatatableStepComponent) multiRowDatatableStepComponent: MultiRowDatatableStepComponent;

  multiRowDatatableFlag: boolean;
  datatableFormfields: any;
  dateTransformColumns: string[] = [];
  dataTableEntryObjectTemplate: any = {
    locale: 'en'
  };
  datatableName: string;


  constructor() {

  }

  ngOnInit() {
    console.log(this.datatableTemplate);
    this.datatableName = this.datatableTemplate.registeredTableName;
    this.multiRowDatatableFlag = this.datatableTemplate.columnHeaderData[0].columnName === 'id' ? true : false;
    const columns = this.datatableTemplate.columnHeaderData.filter((column: any) => {
      return ((column.columnName !== 'id') && (column.columnName !== 'client_id'));
    });
    this.datatableFormfields = this.getFormfields(columns, this.dateTransformColumns, this.dataTableEntryObjectTemplate);
  }

  getFormfields(columns: any, dateTransformColumns: string[], dataTableEntryObjectTemplate: any) {
    return columns.map((column: any) => {
      switch (column.columnDisplayType) {
        case 'INTEGER':
        case 'STRING':
        case 'DECIMAL':
        case 'TEXT': return new InputBase({
          controlName: column.columnName,
          label: column.columnName,
          value: '',
          type: (column.columnDisplayType === 'INTEGER' || column.columnDisplayType === 'DECIMAL') ? 'number' : 'text',
          required: (column.isColumnNullable) ? false : true
        });
        case 'BOOLEAN': return new CheckboxBase({
          controlName: column.columnName,
          label: column.columnName,
          value: '',
          type: 'checkbox',
          required: (column.isColumnNullable) ? false : true
        });
        case 'CODELOOKUP': return new SelectBase({
          controlName: column.columnName,
          label: column.columnName,
          value: '',
          options: { label: 'value', value: 'id', data: column.columnValues },
          required: (column.isColumnNullable) ? false : true
        });
        case 'DATE': {
          dateTransformColumns.push(column.columnName);
          dataTableEntryObjectTemplate.dateFormat = 'yyyy-MM-dd';
          return new InputBase({
            controlName: column.columnName,
            label: column.columnName,
            value: '',
            type: 'date',
            required: (column.isColumnNullable) ? false : true
          });
        }
        case 'DATETIME': {
          dateTransformColumns.push(column.columnName);
          dataTableEntryObjectTemplate.dateFormat = 'yyyy-MM-dd HH:mm';
          return new InputBase({
            controlName: column.columnName,
            label: column.columnName,
            value: '',
            type: 'datetime-local',
            required: (column.isColumnNullable) ? false : true
          });
        }
      }
    });
  }

  get clientDatatableForm() {
    if (this.multiRowDatatableFlag) {
      return this.multiRowDatatableStepComponent.datatableForm;
    } else {
      return this.singleRowDatatableStepComponent.datatableForm;
    }
  }

}
