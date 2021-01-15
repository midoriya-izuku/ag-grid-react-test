import countries from "./countries.json";
import { validationSetter } from "../utils/validationSetter";
import {
  emailValidation,
  checkCharacterCounter,
} from "../utils/validationFunctions";

export const editableTable = {
  columnDefs: [
    {headerName:"",
  checkboxSelection:true},
    {
      headerName: "Id",
      field: "id",
      cellRenderer: "fieldComponent",
      cellRendererParams: {
        placeholder: "Id",
      },
      valueSetter: validationSetter(),
    },
    {
      headerName: "Name",
      field: "name",
      cellRenderer: "fieldComponent",
      cellRendererParams: {
        placeholder: "Name",
      },
      valueSetter: validationSetter(
        checkCharacterCounter,
        "name should be greater than 3 characters"
      ),
    },
    {
      headerName: "Email",
      field: "email",
      cellRenderer: "fieldComponent",
      cellRendererParams: {
        placeholder: "Email",
      },
      valueSetter: validationSetter(emailValidation, "email invalid"),
    },
    {
      headerName: "Gender",
      field: "gender",
      cellRenderer: "fieldComponent",
      cellRendererParams: {
        placeholder: "Gender",
      },
      cellEditor: "agSelectCellEditor",
      cellEditorParams: {
        values: ['Male', 'Female', 'Other']
      },
    },
    {
      headerName: "Country",
      field: "country",
      cellRenderer: "fieldComponent",
      cellRendererParams: {
        placeholder: "country",
      },
      cellEditor: "agSelectCellEditor",
      cellEditorParams: {
        values: Object.keys(countries),
      },
    },
    {
      headerName: "City",
      field: "city",
      cellRenderer: "fieldComponent",
      cellRendererParams: {
        placeholder: "city",
      },
      cellEditor: "agSelectCellEditor",
      cellEditorParams: function (params) {
        if (params.data.country) {
          return { values: countries[params.data.country] };
        } else {
          return { values: [] };
        }
      },
    },
    {
      headerName: "Date",
      field: "date",
      filter: true,
      sortable: true,
      editable: true,
      cellRenderer: "fieldComponent",
      cellRendererParams: {
        placeholder: "date",
      },
      cellEditor: "datePicker",
    },
    {
      headerName: "Action",
      field: "action",
      cellRenderer: "deleteButtonComponent",
      editable: false,
    },
  ],
  rowData: [
    {
      id: "1",
      name: "sam",
      email: "sam@gmail.com",
      gender:"Male",
      date: "20/01/2021",
      country: "Australia",
      city: "Melbourne",
      isError: {},
    },
    {
      id: "2",
      name: "sam2",
      email: "sam2@gmail.com",
      gender:"Female",
      date: "20/01/2021",
      country: "UK",
      city: "London",
      isError: {},
    },
    {
      id: "3",
      name: "sam3",
      email: "sam3@gmail.com",
      gender:"Female",
      date: "20/01/2021",
      country: "USA",
      city: "Chicago",
      isError: {},
    },
  ],
};

export const nonEditableTable = {
  columnDefs: [
    {
      headerName: "Id",
      field: "id",
    },
    {
      headerName: "Name",
      field: "name",
    },
    {
      headerName: "Email",
      field: "email",
    },
    {
      headerName: "Gender",
      field: "gender",
    },
    {
      headerName: "Country",
      field: "country",
    },
    {
      headerName: "City",
      field: "city",
    },
    {
      headerName: "Date",
      field: "date",
    },    
  ],
};
