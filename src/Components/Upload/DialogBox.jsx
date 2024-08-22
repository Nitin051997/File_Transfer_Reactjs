import React from 'react';
import { Button, IconButton } from '@mui/material';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { CheckCircle, Error, } from '@mui/icons-material';

const DialogBox = ({ open, openData, handleClose, handleDataClose, fileUpload }) => {

    return (
        <>
        {open ? <Dialog open={open} closeAfterTransition aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
            <DialogTitle id="alert-dialog-title" style={{backgroundColor: JSON.stringify(fileUpload).includes('success') ? '#a5c90f' : '#ff8829', borderRadius: '2px', textAlign: 'center'}}>
                <IconButton>
                {JSON.stringify(fileUpload).includes('success') ? <CheckCircle/> : <Error/>}
                </IconButton> 
                {JSON.stringify(fileUpload).includes('success') ? 'File Uploaded Successful' : 'Attempt Fail!'}
            </DialogTitle>
                <DialogContent>
                <DialogContentText id="alert-dialog-description" sx={{ textAlign: 'center', fontWeight: 'bold', paddingTop: '4vh' }}>
                    {JSON.stringify(fileUpload).includes('success') ? 'File Uploaded Successful, Kindly press Ok to continue!' : fileUpload.error}
                </DialogContentText>
                </DialogContent>
                <DialogActions><Button sx={{ width: '', height: ''}} onClick={handleClose}>ok</Button></DialogActions>
            </Dialog> : <></>}
            {openData ? <Dialog open={openData} closeAfterTransition aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
            <DialogTitle id="alert-dialog-title" style={{backgroundColor: JSON.stringify(fileUpload).includes('success') ? '#a5c90f' : '#ff8829', borderRadius: '2px', textAlign: 'center'}}>
                <IconButton>
                {JSON.stringify(fileUpload).includes('success') ? <CheckCircle/> : <Error/>}
                </IconButton> 
                {JSON.stringify(fileUpload).includes('success') ? 'File Registered Successful' : 'Attempt Fail!'}
            </DialogTitle>
                <DialogContent>
                <DialogContentText id="alert-dialog-description" sx={{ textAlign: 'center', fontWeight: 'bold', paddingTop: '4vh' }}>
                    {JSON.stringify(fileUpload).includes('success') ? fileUpload.success : fileUpload.error}
                </DialogContentText>
                </DialogContent>
                <DialogActions><Button sx={{ width: '', height: ''}} onClick={handleDataClose}>ok</Button></DialogActions>
            </Dialog> : <></>}
        </>
  )
}

export default DialogBox