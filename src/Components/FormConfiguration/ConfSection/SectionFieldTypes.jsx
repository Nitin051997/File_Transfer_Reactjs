import React, { useEffect, useState } from 'react'
import { TextField, Typography } from '@mui/material'
import { MenuItem, Select } from '@mui/material'

export const FieldTypeText = ({ fielDetails }) => {

    const [text,setText] = useState('')

    const handleText = (event) => {
        setText(event.target.value)
      }

    return (
        <>
                <div style={{ display: 'flex', paddingTop: '1%'}}>
                    <div>
                        <div style={{display: 'flex', alignItems: 'flex-start'}}>
                            <Typography variant="h8" sx={{ fontWeight: fielDetails.labelWeight, textAlign: fielDetails.labelAlign }}>{fielDetails.fieldLabel}:<span style={{color: 'red'}}>{fielDetails.fieldMandatory}</span></Typography>
                        </div>
                        <div style={{display: 'flex', alignItems: 'flex-start'}}>
                            <TextField sx={{ paddingLeft: '', width: fielDetails.fieldWidth }} size={fielDetails.fieldSize} type={fielDetails.fieldType} multiline={false} rows={fielDetails.multilineRows} fullWidth inputProps={{maxLength: fielDetails.fieldMaxVal}} value={text} onChange={(event) => {handleText(event)}}/>
                        </div>
                    </div>
                </div>
        </>
    )
}

export const FieldTypeDropDown = ({ fielDetails }) => {

    const [drop,setDrop] = useState('Select One')

    const stringData = fielDetails.fieldOption
    const dropDownList = JSON.parse(stringData)

    const handleDrop = (event) => {
        setDrop(event.target.value)
      }

      return (
        <>
                <div style={{ display: 'flex', paddingTop: '1%'}}>
                    <div>
                        <div style={{display: 'flex', alignItems: 'flex-start'}}>
                            <Typography variant="h8" sx={{ fontWeight: fielDetails.labelWeight, textAlign: fielDetails.labelAlign }}>{fielDetails.fieldLabel}:<span style={{color: 'red'}}>{fielDetails.fieldMandatory}</span></Typography>
                        </div>
                        <div style={{display: 'flex', alignItems: 'flex-start'}}>
                            <Select value={drop} onChange={(event) => {handleDrop(event)}} sx={{ paddingLeft: '', width: fielDetails.fieldWidth }} size={fielDetails.fieldSize} >
                                <MenuItem value={'Select One'} ><Typography variant="h7" sx={{ fontWeight: '' }}>Select One</Typography></MenuItem>
                                {dropDownList.map((res) => {
                                    return <MenuItem value={res.storedvalue} ><Typography variant="h7" sx={{ fontWeight: '' }}>{res.displayvalue}</Typography></MenuItem>
                                })}
                            </Select>
                        </div>
                    </div>
                </div>
        </>
    )
}