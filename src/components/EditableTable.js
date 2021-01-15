import React from "react";
import { useGrid } from "../contexts/GridContext";
import { AgGridReact } from "ag-grid-react";
import FieldComponent from "../renderers/FieldComponent";
import DeleteButtonComponent from "../renderers/DeleteButtonComponent";
import DatePickerComponent from "../editors/DatePicker/DatePicker";
const GridContainer = () => {
  let { setEditableGrid, editableTableData } = useGrid();
  let frameworkComponents = {
    datePicker: DatePickerComponent,
    fieldComponent: FieldComponent,
    deleteButtonComponent: DeleteButtonComponent,
  };
  return (
    <>
      <div
        className="ag-theme-balham"
        style={{
          height: "500px",
          width: "95%",
          margin: "10px 20px",
        }}
      >
        <AgGridReact
          rowSelection="multiple"
          onGridReady={(params) => {
            setEditableGrid(params.api);
          }}
          columnDefs={editableTableData.columnDefs}
          rowData={editableTableData.rowData}
          enableBrowserTooltips={true}
          singleClickEdit={true}
          enableSorting={true}
          defaultColDef={{
            flex: 1,
            minWidth: 110,
            filter: true,
            editable: true,
            resizable: true,
            tooltipValueGetter: (params) => {
              if (!params.value) {
                return params.colDef.field;
              }
              if (!params.data.isError[params.colDef.field]?.value) {
                return params.value;
              } else {
                return params.data.isError[params.colDef.field]?.errMsg;
              }
            },
          }}
          frameworkComponents={frameworkComponents}
        ></AgGridReact>
      </div>
    </>
  );
};

export default GridContainer;
