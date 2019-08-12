import { Component, OnInit, Input } from '@angular/core';
import { InputBase } from 'app/shared/form-dialog/formfield/model/input-base';
import { SelectBase } from 'app/shared/form-dialog/formfield/model/select-base';
import { CheckboxBase } from 'app/shared/form-dialog/formfield/model/checkbox-base';

@Component({
  selector: 'mifosx-client-form-datatable-step',
  templateUrl: './client-form-datatable-step.component.html',
  styleUrls: ['./client-form-datatable-step.component.scss']
})
export class ClientFormDatatableStepComponent implements OnInit {
  @Input() datatableTemplate: any;
  multiRowDatatableFlag: boolean;
  datatableFormfields: any;
  dateTransformColumns: string[] = [];
  dataTableEntryObject: any;

  constructor() { }

  ngOnInit() {
    console.log(this.datatableTemplate);

    this.multiRowDatatableFlag = this.datatableTemplate[0].columnName === 'id' ? true : false;
    const columns = this.datatableTemplate.filter((column: any) => {
      return ((column.columnName !== 'id') && (column.columnName !== 'client_id'));
    });
    this.datatableFormfields = this.getFormfields(columns, this.dateTransformColumns, this.dataTableEntryObject);
  }

  getFormfields(columns: any, dateTransformColumns: string[], dataTableEntryObject: any) {
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
          dataTableEntryObject.dateFormat = 'yyyy-MM-dd';
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
          dataTableEntryObject.dateFormat = 'yyyy-MM-dd HH:mm';
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

}
