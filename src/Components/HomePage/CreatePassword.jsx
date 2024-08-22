import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, } from '@mui/material';
import React, { useState } from 'react'

const CreatePassword = ({ password, setPassword, rePassword, setRePassword, openD, setOpenD, handleCreateUser, crtValid, rePassValid, setRePassValid }) => {

    const [showPassword, setShowPassword] = useState(false);
    const [showRePassword, setShowRePassword] = useState(false);

    const handleClose = () => {
        setOpenD(false);
      };

      const handleClickShowPassword = () => setShowPassword((show) => !show);
      const handleClickShowRePassword = () => setShowRePassword((show) => !show);
  
      const handleMouseDownPassword = (event) => {
          event.preventDefault();
        };

        const handlePassword = (event) => {
            setPassword(event.target.value)
        }
    
        const handleRePassword = (event) => {
            setRePassword(event.target.value)
        }
    
        const handleRePasswordBlur = () => {
            if(rePassword != ''){
                if(password == rePassword){
                    setRePassValid(false)
                }else{
                    setRePassValid(true)
                }
            }
        }

  return (
    <>
        <Dialog open={openD} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
            <DialogTitle id="alert-dialog-title">
                {"Gmail Varification"}
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    OTP Verification Successful
                </DialogContentText>
            </DialogContent>
        <DialogActions>
        <Button onClick={handleClose}>ok</Button>
        </DialogActions>
        </Dialog>
        <div>
        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                <OutlinedInput id="outlined-adornment-password" type={showPassword ? 'text' : 'password'} 
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton aria-label="toggle password visibility" onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword} edge="end">
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </InputAdornment>
                    }
                    label="Password" value={password} onChange={(pass) => {handlePassword(pass)}}
                    onBlur={() => {handleRePasswordBlur()}}/>
        </FormControl>
        </div>

        <div>
        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">ReType Password</InputLabel>
                <OutlinedInput id="outlined-adornment-password" type={showRePassword ? 'text' : 'password'} 
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton aria-label="toggle password visibility" onClick={handleClickShowRePassword} onMouseDown={handleMouseDownPassword} edge="end">
                        {showRePassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </InputAdornment>
                    }
                    label="ReType Password" value={rePassword} onChange={(rePass) => {handleRePassword(rePass)}} error={rePassValid} helperText={rePassValid ? 'Password not matching' : ''} onBlur={() => {handleRePasswordBlur()}}/>
        </FormControl>
        </div>

        <div style={{paddingTop: '2vh'}}>
        <Button variant="contained" style={{textTransform: 'none'}} onClick={() => {handleCreateUser()}} disabled={crtValid}>Create Account</Button>
        </div>
    </>
  )
}

export default CreatePassword