import React, { useContext, useState, useEffect } from "react";
import { editableTable, nonEditableTable } from "../data/tableData";
import { getStoredData, storeData } from "../utils/storage";
const GridContext = React.createContext();

export function useGrid() {
  return useContext(GridContext);
}

export function GridProvider({ children }) {
  const [editableTableData, setEditableTableData] = useState({
    columnDefs: editableTable.columnDefs,
    rowData: [],
  });
  const [savedTableData, setSavedTableData] = useState({
    columnDefs: nonEditableTable.columnDefs,
    rowData: [],
  });
  const [editableGridApi, setEditableGridApi] = useState();
  const [savedGridApi, setSavedGridApi] = useState();
  const [submitted, setSubmitted] = useState(false);

  const setEditableTableGrid = (gridApi) => {
    setEditableGridApi(gridApi);
  };

  const setSavedTableGrid = (gridApi) => {
    setSavedGridApi(gridApi);
  };

  //check to see if the values in the table rows are valid
  const checkValidity = () => {
    let isValid = true;
    editableTableData.rowData.some((rowElement) => {
      for (let item in rowElement) {
        if (item !== "isError") {
          if (rowElement[item] === "") {
            isValid = false;
            return true;
          }
        }
        if (rowElement.isError[item]?.value === true) {
          isValid = false;
          return true;
        }
      }
    });
    return isValid;
  };

  //add new row to grid
  const addNewRow = () => {
    setSubmitted(false);
    let newRow = {
      id: "",
      name: "",
      email: "",
      country: "",
      city: "",
      date: "",
      isError: {},
    };
    let newRowData = editableTableData.rowData;
    newRowData.push(newRow);
    setEditableTableData({ ...editableTableData, rowData: newRowData });
    editableGridApi.setRowData(editableTableData.rowData);
  };

  //remove row by index
  const removeRow = (rowIndex) => {
    let newRowData = editableTableData.rowData;
    newRowData.splice(rowIndex, 1);
    console.log(newRowData);
    setEditableTableData({ ...editableTableData, rowData: newRowData });
    editableGridApi.setRowData(editableTableData.rowData);
  };

  //remove all the selected rows
  const removeSelected = () => {
    let selectedRows = [];
    editableGridApi
      ?.getSelectedNodes()
      .forEach((rowValue) => selectedRows.push(rowValue.rowIndex));
    let editedData = editableTableData.rowData.filter((rowItem, index) => {
      if (selectedRows.includes(index)) {
        return false;
      } else {
        return true;
      }
    });
    editableGridApi?.setRowData(editedData);
  };

  //remove all the non selected rows
  const removeNonSelected = () => {
    let selectedRows = [];
    editableGridApi
      ?.getSelectedNodes()
      .forEach((rowValue) => selectedRows.push(rowValue.rowIndex));
    let editedData = editableTableData.rowData.filter((rowItem, index) => {
      if (selectedRows.includes(index)) {
        return true;
      } else {
        return false;
      }
    });
    editableGridApi?.setRowData(editedData);
  };

  //saved table row data to storage if there are no error
  const submitGrid = () => {
    setSubmitted(true);
    let isValid = checkValidity();
    if (isValid) {
      storeData("table", JSON.stringify(editableTableData.rowData));
      savedGridApi?.setRowData(editableTableData.rowData);
    } else {
      alert("check for errors");
    }
  };

  //get the value for table from storage if there is none set the preconfigured values
  const setTableRowData = () => {
    let storedTableData = JSON.parse(getStoredData("table"));
    if (storedTableData) {
      setEditableTableData({ ...editableTableData, rowData: storedTableData });
      setSavedTableData({ ...savedTableData, rowData: storedTableData });
    } else {
      setEditableTableData({
        ...editableTableData,
        rowData: editableTable.rowData,
      });
      setSavedTableData({ ...savedTableData, rowData: [] });
    }
  };

  //get the table row data at initial mount
  useEffect(() => {
    setTableRowData();
  }, []);

  const value = {
    editableTableData,
    savedTableData,
    submitted,
    setEditableTableGrid,
    setSavedTableGrid,
    submitGrid,
    removeSelected,
    removeNonSelected,
    addNewRow,
    removeRow,
  };

  return <GridContext.Provider value={value}>{children}</GridContext.Provider>;
}
