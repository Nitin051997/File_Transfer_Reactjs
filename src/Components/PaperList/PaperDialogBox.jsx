import React from 'react';
import { Button, IconButton } from '@mui/material';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { CheckCircle, Error, } from '@mui/icons-material';

const PaperDialogBox = ({ open, paperDetails, handleClose }) => {
  return (
    <>
        {open ? <Dialog open={open} closeAfterTransition aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
            <DialogTitle id="alert-dialog-title" style={{backgroundColor: JSON.stringify(paperDetails).includes('success') ? '#a5c90f' : '#ff8829', borderRadius: '2px', textAlign: 'center'}}>
                <IconButton>
                {JSON.stringify(paperDetails).includes('success') ? <CheckCircle/> : <Error/>}
                </IconButton> 
                {JSON.stringify(paperDetails).includes('success') ? 'Paper Added Successful' : 'Attempt Fail!'}
            </DialogTitle>
                <DialogContent>
                <DialogContentText id="alert-dialog-description" sx={{ textAlign: 'center', fontWeight: 'bold', paddingTop: '4vh' }}>
                    {JSON.stringify(paperDetails).includes('success') ? 'Paper Created Successful, Kindly press Ok to continue!' : paperDetails.error}
                </DialogContentText>
                </DialogContent>
                <DialogActions><Button sx={{ width: '', height: ''}} onClick={handleClose}>ok</Button></DialogActions>
            </Dialog> : <></>}
    </>
  )
}

export default PaperDialogBox