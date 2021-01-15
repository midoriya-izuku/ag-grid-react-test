import countriesData from "./countries.json";
import { validationSetter } from "../utils/validationSetter";
import {
  emailValidation,
  checkCharacterCounter,
} from "../utils/validationFunctions";
let countries = JSON.parse(countriesData);

export const editableTable = {
  columnDefs: [
    {
      headerName: "Id",
      field: "id",
      onCellClicked: (params) => {
        return true;
      },
      cellRenderer: "fieldComponent",
      cellRendererParams: {
        placeholder: "Id",
      },
      checkboxSelection: true,
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
        placeholder: "Name",
      },
      valueSetter: validationSetter(emailValidation, "email invalid"),
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
        values: ["indonesia", "china", "malaysia"],
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
      date: "20/01/2021",
      country: "",
      city: "",
      isError: {},
    },
    {
      id: "2",
      name: "sam2",
      email: "sam2@gmail.com",
      date: "20/01/2021",
      country: "",
      city: "",
      isError: {},
    },
    {
      id: "3",
      name: "sam3",
      email: "sam3@gmail.com",
      date: "20/01/2021",
      country: "",
      city: "",
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
      headerName: "Country",
      field: "country",
    },
    {
      headerName: "City",
      field: "city",
    },
  ],
};
