import React from "react";
import { useGrid } from "../contexts/GridContext";
import { AgGridReact } from "ag-grid-react";
const NonEditableTable = () => {
  let { setNonEditableGrid, nonEditableTableData } = useGrid();
  return (
    <>
       <div className="ag-theme-balham"
        style={{
          height: '500px',
          width: '100%',
          margin: '10px 20px'
        }}>
        <AgGridReact
            onGridReady = {(params)=>{setNonEditableGrid(params.api)}}
            columnDefs={nonEditableTableData.columnDefs}
            rowData={nonEditableTableData.rowData}
            enableBrowserTooltips = {true} defaultColDef =  {{
              flex: 1,
              minWidth: 110,
              filter:true,
              editable: true,
              resizable: true,}}
          ></AgGridReact>
        </div> 
    </>
  );
};

export default NonEditableTable;
