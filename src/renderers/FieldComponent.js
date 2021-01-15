import React from "react";
import { useGrid } from "./../contexts/GridContext";
const FieldComponent = ({ value, colDef, data, placeholder }) => {
  let { submitted } = useGrid();
  let disp = null;

  if (value?.length > 0) {
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
