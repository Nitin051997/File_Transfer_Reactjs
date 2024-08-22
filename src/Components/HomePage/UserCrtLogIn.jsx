import { FormControl, TextField } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import EmailOtpValidation from './EmailOtpValidation';
import AlertBox from './AlertBox';
import CreatePassword from './CreatePassword';

const UserCrtLogIn = ({ setLoadBar }) => {

    const [userName,setUserName] = useState('')
    const [userid,setUserid] = useState('')
    const [userIdValid,setUserIdValid] = useState(false)
    const [userIdMsg,setUserIdMsg] = useState('')
    const [gmail,setGmail] = useState('')
    const [gmailValid,setGmailValid] = useState(false)
    const [password,setPassword] = useState()
    const [rePassword,setRePassword] = useState('')
    const [rePassValid,setRePassValid] = useState(false)
    const [otp, setOtp] = useState('');
    const [otpDisable,setOtpDisable] = useState(false)
    const [userInfo,setUserInfo] = useState()
    const [passDiv,setPassDiv] = useState(false)
    const [crtValid,setCrtValid] = useState(false)
    const [openD, setOpenD] = useState(false);
    const [alert,setAlert] = useState(false)
    const [alertMsg,setAlertMsg] = useState([])

    const handleUserName = (event) => {
        setUserName(event.target.value)
    }

    const handleUserId = (event) => {
        const alphanumericRegex = /^[A-Z0-9_]*$/;
        if((userInfo.some(details => details.user_id == event.target.value) == true) || event.target.value.includes(' ') || !alphanumericRegex.test(event.target.value)){
            if(!alphanumericRegex.test(event.target.value)){
                setUserIdValid(true)
                setUserIdMsg('User Id: Only Upper Case Allowed')
                setUserid(event.target.value)                
            }else{
                setUserIdValid(true)
                setUserIdMsg('User Id already taken OR Space/Special Chr not Allowed')
                setUserid(event.target.value)                
            }
        }else{
            setUserIdValid(false)
            setUserid(event.target.value)
        }
    }

    const handleUserIdBlur = (event) => {
        if((event.target.value).length <= 6&&event.target.value != ''){
            setUserIdValid(true)
            setUserIdMsg('Minimum 6 Characters.')
        }
    }

    const handleGmail = (event) => {
        setGmail(event.target.value)
    }

    const handleGmailBlur = (event) => {
        if(event.target.value != ''){
            if(event.target.value.includes('@') && event.target.value.includes('.') || JSON.stringify(event.target.value).includes(' ')){
                setGmailValid(false)
            }else{
                setGmailValid(true)
            }
        }
    }

    const handleCreateUser = () => {
        if(userInfo.some(details => details.user_id == userid) == true){
            setUserIdValid(true)
            setUserIdMsg('User Id already taken.')
        }else if(password == rePassword){

            let userData = [{"userid": userid, "username": userName, "userpassword": password, "useremail": gmail, "userotp": otp}]

            axios.post(`http://localhost:5000/api/sendUserDetails`, userData)
            .then(respons => {
                setAlertMsg({"success": [respons.data][0].message})
                setAlert(false)
                setCrtValid(true)
            })
            .catch(error => {
                setAlertMsg({"error": error.message})
                setAlert(false)
            })
        }else{
            setRePassValid(true)
        }
    }

      useEffect(() => {
        axios.get('http://localhost:5000/api/userLoginDetails')
        .then(response => {
            setUserInfo(response.data)
        })
        .catch(error => {
            setUserInfo('Error fetching data');
        });
      },[])

      useEffect(() => {setOpenD(true)},[passDiv])

  return (<>
  <div style={{display: 'flex'}}>
  <div style={{flex: '60%', border: ''}}>
    <img src={process.env.PUBLIC_URL + `CoverLogIn.jpg`} style={{ width: '50vw', height: '96vh' }}  alt='Cover'/>
  </div>
  <div style={{flex: '40%', border: ''}}>
  <div style={{paddingTop: '10vh', paddingLeft: '2vw', position: 'absolute'}}>
  {!alert ? <AlertBox alertMsg={JSON.stringify(alertMsg)} setAlert={setAlert} setLoadBar={setLoadBar}/> : ''}
  <Card sx={{width: '60vh', height: '80vh', border: '2px solid #e0e0e0',}}>
    <CardContent>
        <div style={{paddingTop: '2vh'}}>
            <div>
                <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                    <TextField id="outlined-basic" label="User Name" variant="outlined" value={userName} onChange={(userName) => {handleUserName(userName)}} inputProps={{maxLength: 20}} disabled={otpDisable}/>
                </FormControl>
            </div>

            <div>
                <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                    <TextField id="outlined-basic" label="User ID" variant="outlined" value={userid} onChange={(userId) => {handleUserId(userId)}}
                    onBlur={(userId) => {handleUserIdBlur(userId)}}
                    inputProps={{maxLength: 10}}
                    disabled={otpDisable}
                    error={userIdValid} helperText={userIdValid ? userIdMsg : 'Minimum 6 Characters.'}
                    />
                </FormControl>
            </div>

            <div>
                <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                    <TextField id="outlined-basic" label="Gmail" variant="outlined" value={gmail} onChange={(getGmail) => {handleGmail(getGmail)}} onBlur={(getGmail) => {handleGmailBlur(getGmail)}}
                    disabled={otpDisable}
                    error={gmailValid} helperText={gmailValid ? 'Gamil invalid' : ''}
                    />
                </FormControl>
            </div>

    {!passDiv ? <div style={{paddingTop: '5vh'}}>
                <EmailOtpValidation email={gmail} setPassDiv={setPassDiv} otp={otp} setOtp={setOtp} gmailValid={gmailValid} setAlertMsg={setAlertMsg} setAlert={setAlert} setLoadBar={setLoadBar} userName={userName} userid={userid} setOtpDisable={setOtpDisable}/>
            </div>
    :
            <>
                <CreatePassword password={password} setPassword={setPassword} rePassword={rePassword} setRePassword={setRePassword} openD={openD} setOpenD={setOpenD} handleCreateUser={handleCreateUser} crtValid={crtValid} rePassValid={rePassValid} setRePassValid={setRePassValid}/>
            </>}
        </div>
    </CardContent>
  </Card>
  </div>
  </div>
  </div>
    </>)
}

export default UserCrtLogIn