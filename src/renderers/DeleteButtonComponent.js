import React from "react";
import { useGrid } from "./../contexts/GridContext";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  button: {
    height: "20px",
  },
}));
const DeleteButtonComponent = ({ rowIndex }) => {
  let { removeRow } = useGrid();
  let classes = useStyles();
  return (
    <Button
      className={classes.button}
      variant="contained"
      color="secondary"
      onClick={() => removeRow(rowIndex)}
    >
      Delete
    </Button>
  );
};

export default DeleteButtonComponent;
