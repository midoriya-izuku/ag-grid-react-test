import React from "react";
import EditableTable from "../components/EditableTable";
import NonEditableTable from "../components/NonEditableTable";
import TableActionContainer from "./TableActionContainer";
import { GridProvider } from "../contexts/GridContext";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";
const TablesContainer = () => {
  return (
    <GridProvider>
      <TableActionContainer />
      <EditableTable />
      <NonEditableTable />
    </GridProvider>
  );
};

export default TablesContainer;
