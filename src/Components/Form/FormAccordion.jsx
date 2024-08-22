import { ExpandMore } from '@mui/icons-material'
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material'
import { TextField, Typography } from '@mui/material'
import { MenuItem, Select } from '@mui/material'
import React, { useEffect, useState } from 'react'

const FormAccordion = () => {

    const [text,settext] = useState('')
    const [date,setdate] = useState('')
    const [number,setnumber] = useState('')
    const [file,setfile] = useState(null)
    const [drop,setdrop] = useState('Select One')

    const handleText = (event) => {
        settext(event.target.value)
      }

    const handleNumber = (event) => {
        setnumber(event.target.value)
      }

    const handleDate = (event) => {
        setdate(event.target.value)
      }

    const handleFIle = (event) => {
        setfile(event.target.files[0])
      }

    const handleDrop = (event) => {
        setdrop(event.target.value)
      }

  return (
    <>
        <Accordion sx={{backgroundColor: 'white', border: '2px solid #e0e0e0', boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.5)', padding: '1vh' }}>
            <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', textAlign: 'left' }}>New Form Structure Main</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <form style={{paddingLeft: '', paddingTop: '2vh'}}>
                <div style={{ display: 'flex', paddingTop: '3vh'}}>
                    <div style={{flex: '30%'}}>
                            <Typography variant="h5" sx={{ fontWeight: '', textAlign: 'right' }}>Text:<span style={{color: 'red'}}></span></Typography>
                    </div>
                    <div style={{ flex: '70%'}}>
                            <TextField sx={{ paddingLeft: '2vw', width: '20vw'}} type='text' multiline={false} rows={4} fullWidth inputProps={{maxLength: 36}} value={text} onChange={(event) => {handleText(event)}}/>
                    </div>
                </div>
                <div style={{ display: 'flex', paddingTop: '3vh'}}>
                    <div style={{flex: '30%'}}>
                            <Typography variant="h5" sx={{ fontWeight: '', textAlign: 'right' }}>Number:<span style={{color: 'red'}}></span></Typography>
                    </div>
                    <div style={{ flex: '70%'}}>
                            <TextField sx={{ paddingLeft: '2vw', width: '30vw'}} type='number' fullWidth inputProps={{maxLength: 36}} value={number} onChange={(event) => {handleNumber(event)}}/>
                    </div>
                </div>
                <div style={{ display: 'flex', paddingTop: '3vh'}}>
                    <div style={{flex: '30%'}}>
                            <Typography variant="h5" sx={{ fontWeight: '', textAlign: 'right' }}>Date:<span style={{color: 'red'}}></span></Typography>
                    </div>
                    <div style={{ flex: '70%'}}>
                            <TextField sx={{ paddingLeft: '2vw', width: '40vw'}} type='date' fullWidth value={date} onChange={(event) => {handleDate(event)}}/>
                    </div>
                </div>
                <div style={{ display: 'flex', paddingTop: '3vh'}}>
                    <div style={{flex: '30%'}}>
                            <Typography variant="h5" sx={{ fontWeight: '', textAlign: 'right' }}>File:<span style={{color: 'red'}}></span></Typography>
                    </div>
                    <div style={{ flex: '70%'}}>
                            <TextField sx={{ paddingLeft: '2vw', width: '50vw'}} type='file' name='file' fullWidth onChange={handleFIle} InputLabelProps={{ shrink: true }} />
                    </div>
                </div>
                <div style={{ display: 'flex', paddingTop: '3vh'}}>
                    <div style={{flex: '30%'}}>
                            <Typography variant="h5" sx={{ fontWeight: '', textAlign: 'right' }}>Drop Down:<span style={{color: 'red'}}></span></Typography>
                    </div>
                    <div style={{ flex: '70%'}}>
                        <div style={{paddingLeft: '2vw'}}>
                        <Select value={drop} onChange={(event) => {handleDrop(event)}} sx={{ width: '20vw', height: '8vh' }} >
                            <MenuItem value={'Select One'} ><Typography variant="h7" sx={{ fontWeight: '' }}>Select One</Typography></MenuItem>
                            <MenuItem value={'Inbox'} ><Typography variant="h7" sx={{ fontWeight: '' }}>Inbox</Typography></MenuItem>
                            <MenuItem value={'My Files'} ><Typography variant="h7" sx={{ fontWeight: '' }}>My Files</Typography></MenuItem>
                        </Select>
                        </div>
                    </div>
                </div>
            </form>
            </AccordionDetails>
        </Accordion>
    </>
  )
}

export default FormAccordion