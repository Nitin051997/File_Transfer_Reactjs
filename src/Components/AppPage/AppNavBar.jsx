import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CloudUpload, FileOpenOutlined, List, Logout, Person, Settings, } from '@mui/icons-material';
import { Avatar, Box, Button, ListItemIcon, Menu, MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ValidationAction } from '../Redux/Actions/ValidationAction';
import { SysTimer } from '../Test/FunctionalComponents';

const AppBarLabel = (label,setLoadBar) => {

    const [userProfile,setUserProfile] = useState(null)
    const open = Boolean(userProfile);

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const userID = useSelector((state) => state.CurrentUserReducer)

    const handleProfileOpen = () => {
        setUserProfile(true)
    }

    const handleProfileClose = () => {
        setUserProfile(null)
    }

    const handleLogOut = () => {
        setLoadBar(true)
        setTimeout(() => {
            setLoadBar(false)
            navigate('/')
            dispatch(ValidationAction(false))
        }, 1000);
        setTimeout(() => {
            window.location.reload()
        }, 1050);
    }

    const handleFileList = () => {
        setLoadBar(true)
        setTimeout(() => {
            navigate('/fileList')
            setLoadBar(false)
        }, 1000);
    }

    const handleUploadFile = () => {
      setLoadBar(true)
      setTimeout(() => {
          navigate('/fileuploader')
          setLoadBar(false)
      }, 1000);
    }

    const handlePaper = () => {
      setLoadBar(true)
      setTimeout(() => {
          navigate('/paperList')
          setLoadBar(false)
      }, 1000);
    }

    const handleLogoClick = () => {
        setLoadBar(true)
        setTimeout(() => {
            navigate('/developer')
            setLoadBar(false)
        }, 500);
    }

    return (
      <>
      <Toolbar>
        {/* <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: -1 }}> */}
          <img src={process.env.PUBLIC_URL + '/appIcon.png'} onClick={() => {handleLogoClick()}}/>
        {/* </IconButton> */}
        <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1, display: 'flex', alignItems: 'flex-start', fontSize: '5vh' }}>
          <b>{label}</b>
        </Typography>
        {/* <SysTimer/> */}
        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
        <Button startIcon={<List/>} color="secondary" sx={{ mr: 2}} style={{textTransform: 'none', fontSize: '3vh'}} onClick={() => {handlePaper()}}>Paper</Button>
          <Button startIcon={<CloudUpload/>} color="secondary" sx={{ mr: 2}} style={{textTransform: 'none', fontSize: '3vh'}} onClick={() => {handleUploadFile()}}>Upload File</Button>
            <Button startIcon={<FileOpenOutlined/>} color="secondary" sx={{ mr: 2}} style={{textTransform: 'none', fontSize: '3vh'}} onClick={() => {handleFileList()}}>File List</Button>
            <IconButton size="large" edge="end" aria-label="account of current user" aria-haspopup="true" color="inherit" onClick={() => {handleProfileOpen()}}>
              {/* <AccountCircle /> */}
              <Avatar>{[...userID][0]}</Avatar>
            </IconButton>
          </Box>
      </Toolbar>
            <Menu userProfile={userProfile} open={open} id="account-menu" onClose={() => handleProfileClose()}
              // transformOrigin={{ horizontal: 'right', vertical: 'top' }}
              anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
              PaperProps={{elevation: 0, sx: {overflow: 'visible', filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))', mt: 1.5, '& .MuiAvatar-root': {width: 32, height: 32, ml: -0.5, mr: 1,},'&::before': {content: '""', display: 'block', position: 'absolute', top: 0, right: 14, width: 10, height: 10, bgcolor: 'background.paper', transform: 'translateY(-50%) rotate(45deg)', zIndex: 0,},},}}
      >
          <MenuItem>
              <ListItemIcon>
                  <Person/>
              </ListItemIcon>
              Profile
           </MenuItem>
          <MenuItem>
              <ListItemIcon>
                  <Settings fontSize='small'/>
              </ListItemIcon>
              Setting
          </MenuItem>
          <MenuItem onClick={() => {handleLogOut()}}>
              <ListItemIcon>
                  <Logout fontSize='small'/>
              </ListItemIcon>
              Logout
          </MenuItem>
      </Menu>
      </>
    );
  }

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#1976d2',
      },
    },
  });


const AppNavBar = ({ setLoadBar }) => {

  return (
    <Stack spacing={2} sx={{ flexGrow: 1 }}>
    <ThemeProvider theme={darkTheme}>
      <AppBar position="static" color="primary">
        {AppBarLabel('Connect File',setLoadBar)}
      </AppBar>
    </ThemeProvider>
  </Stack>
  )
}

export default AppNavBar