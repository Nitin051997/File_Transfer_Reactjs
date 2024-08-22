import React from "react";
import { Autocomplete, TextField } from "@mui/material";

export const PaperInputTag = ({ assignedUser, setAssignedUser, optionType }) => {

    const optionData = [{name: "type", options: ['Form','Report','Form & Report']},{name: "organization", options: ['Paper ORG','TMB ORG','BOB ORG']},{name: "validation", options: ['Active','Inactive']}]

  return (
    <>
    <Autocomplete
      fullWidth
      size="small"
      value={assignedUser}
      onChange={(event, newValue) => {
        setAssignedUser(newValue);
      }}
      multiple 
      options={assignedUser.length === 1 ? [] : optionData.filter((fil) => fil.name == optionType)[0].options.map((option) => option)}
      renderInput={(params) => (
            <TextField fullWidth
                {...params}
                InputProps={{
                  ...params.InputProps,
                  type: 'search',
                }}
            />
      )}
    />
    </>
  );
}
