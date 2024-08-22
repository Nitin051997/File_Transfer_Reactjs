import { Button, FormControl, TextField } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import CircleLoader from '../Error/CircleLoader';

const EmailOtpValidation = ({ email, setPassDiv, otp, setOtp, gmailValid, setAlertMsg, setAlert, setLoadBar, userName, userid, setOtpDisable }) => {

    const [open, setOpen] = useState(false);
    const [otpValidation,setOtpValidation] = useState()
    const [otpError,setOtpError] = useState(false)
    const [loading,setLoading] = useState(false)

    const navigate = useNavigate()

    const generateOTP = () => {
        const generatedOTP = Math.floor(1000 + Math.random() * 9000); // Generate a random 4-digit OTP
        setOtp(generatedOTP);
      };

    const handleOtpValidation = (event) => {
      if (/^\d*$/.test(event.target.value)) {
        setOtpValidation(event.target.value)
      }
     };

    const handleVerificationOtp = () => {
      if(otp == otpValidation){
        setOtpError(false)
        setPassDiv(true)
        setOtpDisable(true)
      }else{
        setOtpError(true)
        setPassDiv(false)
      }
    }
    
    const sendEmail = async () => {
        try {
          let bodyVal = { email, otp }
          const response = await axios.post('http://localhost:5000/api/sendOTPmail', bodyVal);
          setAlertMsg({"success": response.data.msg})
            setLoading(false)
            setAlert(false)
            setOpen(true)
        } catch (error) {
          setAlertMsg({"error": "Failed to send OTP. Please try again later."})
            setLoading(false)
            setAlert(false)
        }
      };

    const handleGetOtp = () => {
      if(userName != '' && userid != ''){
        if(email != ''&&!gmailValid){

          setLoading(true)
    
            setTimeout(() => {
                sendEmail();
            }, 50);
    
            setTimeout(() => {
              
            }, 5000);
          }
      }else{
        setAlertMsg({"error": "Kinldy fill all the Mandatory fileds."})
        setLoading(false)
        setAlert(false)
      }

    };

      const handleNavLogin = () => {
        setLoadBar(true)
        setTimeout(() => {
          navigate('/')
          setLoadBar(false)
        }, 1000);
      }

    useEffect(() => {generateOTP()},[email])

  return (
    <>
    {!open&&!loading ? <><div><Button variant="contained" style={{textTransform: 'none', marginRight: '20px' }} color='success'  onClick={() => handleGetOtp()}>Get OTP</Button>
    <Button style={{textTransform: 'none'}}  onClick={() => handleNavLogin()}>Sign In</Button></div></> : !open&&loading ?
            <>
            <CircleLoader />
            </> :
                <>
                <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                    <TextField id="outlined-basic" label="OTP" variant="outlined" value={otpValidation} onChange={(otpVal) => {handleOtpValidation(otpVal)}}
                    error={otpError} helperText={otpError ? 'OTP doesnt match!' : ''} inputProps={{maxLength: 4}}
                    />
                </FormControl>
        <Button variant="contained" style={{textTransform: 'none'}} color='warning' onClick={() => handleVerificationOtp()}>Verify OTP</Button>
        </>}
    </>
  )
}

export default EmailOtpValidation