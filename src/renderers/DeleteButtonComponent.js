import React from "react";
import { useGrid } from "./../contexts/GridContext";

const DeleteButtonComponent = ({ rowIndex }) => {
  let { removeRow } = useGrid();
  return <button onClick={() => removeRow(rowIndex)}>Delete</button>;
};

export default DeleteButtonComponent;
