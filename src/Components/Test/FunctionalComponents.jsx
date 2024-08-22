import { Typography } from "@mui/material";
import React from "react";

export const SysDate = () => {

  var currentDate = new Date();
  var monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
  var year = currentDate.getFullYear();
  var month = monthNames[currentDate.getMonth()];
  var day = currentDate.getDate();

    return <>{month + " " + day + ", " + " " + year}</>
}


export const SysTimer = () => {

  return <>
    <Typography variant="h1" noWrap sx={{ flexGrow: 1, display: 'flex', alignItems: 'flex-start', fontFamily: "inherit", fontSize: '7vh', textAlign: "left", paddingRight: '100vh' }} style={{color: '#848484'}} ><b>10:00</b></Typography>
  </>
}
