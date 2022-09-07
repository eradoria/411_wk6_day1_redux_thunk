import React from "react";
import CustomTable from "./Table";
import Button from "@mui/material/Button";

const Import = (props) => {
  // fill out this component
  //   console.log("props from import", props);

  return (
    <>
      <Button variant="contained" color="primary" onClick={props.fetchMakes}>
        Import{" "}
      </Button>
      ,
      <CustomTable makes={props.makes} handleDelete={props.deleteMake} />
    </>
  );
};

export default Import;
