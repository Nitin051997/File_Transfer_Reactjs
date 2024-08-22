import React from 'react';
import { Button, IconButton } from '@mui/material';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { Error, } from '@mui/icons-material';

const DialogBox = ({ open, handleClose, alertMsg }) => {

    return (
        <>
        {open ? <Dialog open={open} onClose={handleClose} closeAfterTransition aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
            <DialogTitle id="alert-dialog-title" style={{backgroundColor: '#ff8829', borderRadius: '2px', textAlign: 'center'}}>
                <IconButton>
                     <Error/>
                </IconButton> 
                404: Error Occurred!
            </DialogTitle>
                <DialogContent>
                <DialogContentText id="alert-dialog-description" sx={{ textAlign: 'center', fontWeight: 'bold', paddingTop: '4vh' }}>
                Operation Failed, kindly try again OR contact Admin..!
                </DialogContentText>
                </DialogContent>
                <DialogActions><Button sx={{ width: '', height: ''}} onClick={handleClose}>ok</Button></DialogActions>
            </Dialog> : <></>}
        </>
  )
}

export default DialogBox