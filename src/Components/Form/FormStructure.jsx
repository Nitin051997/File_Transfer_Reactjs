import { Button, Dialog, DialogContent, DialogTitle } from '@mui/material'
import React, { useState } from 'react'
import FormAccordion from './FormAccordion';

const FormStructure = () => {

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

  return (
    <>
    <Button onClick={handleOpen}>Open Form</Button>
    <Dialog fullScreen open={open} >
        <DialogTitle sx={{backgroundColor: 'yellow'}}>
            Form Structure
            <Button onClick={handleClose}>Close</Button>
        </DialogTitle>
        <DialogContent>
        <div style={{height: '83vh', width: '95vw', paddingTop: '2vh', backgroundColor: 'white', overflow: 'auto', scrollbarWidth: 'none', scrollBehavior: 'smooth'}}>
                <FormAccordion/>
                <FormAccordion/>
                <FormAccordion/>
        </div>
        </DialogContent>
    </Dialog>
    </>
  )
}

export default FormStructure