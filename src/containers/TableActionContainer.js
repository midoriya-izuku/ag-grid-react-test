import React from "react";
import Button from "@material-ui/core/Button";
import { useGrid } from "../contexts/GridContext";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  button: {
    margin: "10px",
  },
}));
const TableActionContainer = () => {
  let { submitGrid, addNewRow, removeSelected, removeNonSelected } = useGrid();
  const classes = useStyles();
  return (
    <div>
      <Button
        className={classes.button}
        variant="contained"
        color="primary"
        onClick={addNewRow}
      >
        Add Row
      </Button>
      <Button
        className={classes.button}
        variant="contained"
        color="primary"
        onClick={removeSelected}
      >
        Delete Selected Rows
      </Button>
      <Button
        className={classes.button}
        variant="contained"
        color="primary"
        onClick={removeNonSelected}
      >
        Delete Non Selected Rows
      </Button>
      <Button
        className={classes.button}
        variant="contained"
        color="primary"
        onClick={submitGrid}
      >
        Submit Data
      </Button>
    </div>
  );
};

export default TableActionContainer;
