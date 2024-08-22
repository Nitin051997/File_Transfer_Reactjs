import React from "react";
import { Autocomplete, TextField } from "@mui/material";
import { useSelector } from "react-redux";

export const ReactInputTag = ({ assignedUser, setAssignedUser}) => {

  const userDetails = useSelector((state) => state.UserDetailsReducer)
  const userID = useSelector((state) => state.CurrentUserReducer)

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
      options={assignedUser.length === 2 ? [] : userDetails.filter((fil) => fil.user_id != userID).map((option) => option.user_id)}
      renderInput={(params) => (
            <TextField fullWidth
                helperText={'Maximum 2 Users.'}
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
