import { MenuItem, Select, Typography } from '@mui/material'
import React from 'react'

const DropDownFileList = ({ handleFileOption }) => {
  return (
    <>
        <Select defaultValue={'My Files'} sx={{ backgroundColor: '#2c4c9c', color: '#d5dbeb', width: '120px', height: '40px' }} >
            <MenuItem value={'Inbox'} onClick={() => {handleFileOption('Inbox')}} ><Typography variant="h6" sx={{ fontWeight: 'bold' }}>Inbox</Typography></MenuItem>
            <MenuItem value={'My Files'} onClick={() => {handleFileOption('My Files')}} ><Typography variant="h6" sx={{ fontWeight: 'bold' }}>My Files</Typography></MenuItem>
        </Select>
    </>
  )
}

export default DropDownFileList