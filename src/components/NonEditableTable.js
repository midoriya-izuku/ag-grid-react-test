import React from "react";
import { useGrid } from "../contexts/GridContext";
import { AgGridReact } from "ag-grid-react";
const NonEditableTable = () => {
  let { setNonEditableGrid, nonEditableTableData } = useGrid();
  return (
    <>
      <h4>Submitted Data</h4>
       <div className="ag-theme-balham"
        style={{
          height: '500px',
          width: '95%',
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
              editable: false,
              resizable: true,}}
            
          ></AgGridReact>
        </div> 
    </>
  );
};

export default NonEditableTable;
