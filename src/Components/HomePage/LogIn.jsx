import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ValidationAction } from '../Redux/Actions/ValidationAction';
import { CurrentUserAction } from '../Redux/Actions/CurrentUserAction';
import { UserDetailsAction } from '../Redux/Actions/UserDetailsAction';
import { ConfFormSectionScreen } from '../Redux/Actions/ConfFormScreenSectionAction';

const LogIn = ({ setLoadBar }) => {

    const [userid,setUserid] = useState()
    const [password,setPassword] = useState()
    const [userInfo,setUserInfo] = useState()
    const [showPassword, setShowPassword] = useState(false);
    const [loginValidation,setLoginValidation] = useState(false)

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleUserId = (event) => {
        setUserid(event.target.value)
        setLoginValidation(false)
    }

    const handlePassword = (event) => {
        setPassword(event.target.value)
        setLoginValidation(false)
    }

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };

      const handleLogInValidation = () => {
        // if(userInfo != 'Error fetching data'){
            // if(userInfo.some(details => details.user_id == userid) == true){
                // if(userInfo.filter((fil) => {return fil.user_id == userid})[0].user_password == password){
                    setLoadBar(true)

                    setTimeout(() => {
                        setLoadBar(false)
                        navigate('/Home')
                        setLoginValidation(true)
                    }, 1000);

                    setTimeout(() => {
                        dispatch(ValidationAction(true))
                        dispatch(CurrentUserAction(userid))
                        dispatch(ConfFormSectionScreen())
                        // window.location.reload()
                    }, 1010);

                // }else{
                    setLoginValidation(true)
                // }
            // }else{
                // setLoginValidation(true)
            // }
        // }

    };

      const handleSignUp = () => {
        setLoadBar(true)
        setTimeout(() => {
            setLoadBar(false)
            navigate('/createUser')
        }, 800);
      }

      useEffect(() => {
        axios.get('http://localhost:5000/api/userLoginDetails')
        .then(response => {
            setUserInfo(response.data)
            dispatch(UserDetailsAction(response.data))
        })
        .catch(error => {
            setUserInfo('Error fetching data');
            dispatch(UserDetailsAction([]))
        });
      },[])

  return (<>
    <div style={{display: 'flex'}}>
        <div style={{flex: '60%', border: ''}}>
            <img src={process.env.PUBLIC_URL + `CoverLogIn.jpg`} style={{ width: '50vw', height: '96vh' }}  alt='Cover'/>
        </div>
        <div style={{flex: '40%', border: ''}}>
            <div style={{paddingTop: '10vh', paddingLeft: '2vw'}}>
                <Card sx={{width: '60vh', height: '80vh', border: '2px solid #e0e0e0', backgroundColor: ''}}>
                    <CardContent>
                        <div style={{paddingTop: '6vh'}}>
                            <img src={process.env.PUBLIC_URL + `/logIn.png`} alt='file' />
                        </div>
                        <div style={{paddingTop: '1vh'}}>
                            <div>
                                <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                                    <TextField id="outlined-basic" label="User ID" variant="outlined" value={userid} onChange={(userId) => {handleUserId(userId)}} error={loginValidation}/>
                                </FormControl>
                            </div>

                            <div>
                                <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                                    <InputLabel htmlFor="outlined-adornment-password" error={loginValidation}>Password</InputLabel>
                                    <OutlinedInput id="outlined-adornment-password" type={showPassword ? 'text' : 'password'} endAdornment={
                                    <InputAdornment position="end">
                                    <IconButton aria-label="toggle password visibility" onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword} edge="end">
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                    </InputAdornment>
                                    }
                                    label="Password" value={password} onChange={(pass) => {handlePassword(pass)}} error={loginValidation}/>
                                </FormControl>
                            </div>
                        {loginValidation ? <p style={{color: 'red', fontSize: '13px'}}>User ID & Password doesn't match.</p> : ''}
                        </div>
                    </CardContent>
                    <div>
                        <CardActions>
                            <div style={{paddingLeft: '17vh'}}>
                                <Button variant="contained" style={{textTransform: 'none', width: '10vw', borderRadius: '20px'}} color='secondary'  onClick={() => handleLogInValidation()}>Log In</Button>
                            </div>
                        </CardActions>
                        <CardActions>
                            <div style={{paddingLeft: '15vh'}}>
                                <Button style={{textTransform: 'none'}} onClick={() => {handleSignUp()}}>Sign up</Button><b>OR</b>
                                <Button style={{textTransform: 'none'}}>Forgot Password?</Button>
                            </div>
                        </CardActions>
                    </div>
                </Card>
            </div>
        </div>
    </div>
    </>)
}

export default LogIn