import React from "react";
import { useGrid } from "./../contexts/GridContext";
const FieldComponent = ({ value, colDef, data, placeholder }) => {
  let { submitted } = useGrid();
  let disp = null;
//if value is empty
  if (value?.length > 0) {
    //if this cell has been edited had is not valid
    if (data.isError[colDef.field]?.value) {
      disp = (
        <div
          style={{
            textAlign: "left",
            paddingLeft: "10px",
            color: "black",
            background: "yellow",
          }}
        >
          {value}
        </div>
      );
    } else {
      //if cell is edited and is valid
      disp = (
        <div
          style={{
            textAlign: "left",
            paddingLeft: "10px",
            color: "black",
          }}
        >
          {value}
        </div>
      );
    }
  } else if (
    (value?.length === 0 && data.isError[colDef.field]?.cellEdited) ||
    (value?.length === 0 && submitted)
  ) {
    //if cell value is empty and has cell has been edited display error
    //or if cell value has not been edited but user tried to submit the cell with empty value display error
    disp = (
      <div
        style={{
          textAlign: "left",
          paddingLeft: "10px",
          background: "red",
          color: "white",
          display: "block",
          width: "100%",
          height: "100%",
        }}
      >
        {placeholder}
      </div>
    );
  } else {
    //default value to be shown when new row is added
    disp = (
      <div
        style={{
          textAlign: "left",
          paddingLeft: "10px",
          color: "gray",
          display: "block",
          width: "100%",
          height: "100%",
        }}
      >
        {placeholder}
      </div>
    );
  }
  return <>{disp}</>;
};

export default FieldComponent;
