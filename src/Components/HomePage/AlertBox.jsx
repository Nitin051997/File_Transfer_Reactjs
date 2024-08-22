import React from 'react'
import { Alert, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const AlertBox = ({ alertMsg, setAlert, setLoadBar }) => {

    const navigate = useNavigate()

    function handleSucess() {
        setAlert(true)
        setLoadBar(true)

        if(alertMsg.includes('OTP')){
            setTimeout(() => {
                setLoadBar(false)
                // navigate('/')
            }, 300);
        }else{
            setTimeout(() => {
                setLoadBar(false)
                navigate('/')
            }, 300);            
        }

        
    }

    function handleError() {
        setAlert(true)
    }

  return (
    <>
        {
            alertMsg.includes('success') ? 
                <>
                    <Alert severity="success" action={<Button color="inherit" size="small" onClick={() => {handleSucess()}}>Ok</Button>}>{JSON.parse(alertMsg).success}</Alert>
                </> : 
            alertMsg.includes('error') ? 
                <>
                    <Alert severity="warning" onClose={() => {handleError()}}>{JSON.parse(alertMsg).error}</Alert>
                </> : 
                <>
                    
                </>
        }
    </>
  )
}

export default AlertBox