import React from "react";
import Button from "@material-ui/core/Button";
import { useGrid } from "../contexts/GridContext";
const TableActionContainer = () => {
  let { submitGrid, addNewRow, removeSelected, removeNonSelected } = useGrid();

  return (
    <div>
      <Button onClick={addNewRow}>Add Row</Button>
      <Button onClick={removeSelected}>Delete Selected Rows</Button>
      <Button onClick={removeNonSelected}>Delete Non Selected Rows</Button>
      <Button onClick={submitGrid}>Submit Data</Button>
    </div>
  );
};

export default TableActionContainer;
