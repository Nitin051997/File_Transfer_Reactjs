import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { Badge, Button } from '@mui/material';
import { Delete, MoreVert, Send } from '@mui/icons-material';
import NoDataFound from '../Error/NoDataFound';
import FetchingData from '../Error/FetchingData';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { DownloadScreenAction } from '../Redux/Actions/DownloadScreenAction';
import { useNavigate } from 'react-router-dom';
import DialogBox from '../Download/DialogBox';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'left',
  color: theme.palette.text.secondary,
  maxWidth: '100vw',
}));

export default function StackList({ fileData, filterData, setLoadBar, handleFileOption }) {

  const CurrentUserReducer = useSelector((state) => state.CurrentUserReducer)

  const [fetching,setFetching] = React.useState(true)
  const [alertMsg,setAlertMsg] = React.useState(true)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [open,setOpen] = React.useState(false)

  const handleClose = () => {
    setOpen(false)
  }

  const hanldeUpdateBadge = (clickUploaderId, path, fileName, fileTitle, fileDescription, fileAssigned, fileDate, fileType, fileSize, isOpened) => {

    let downloadDetails = [{"path": path, "fileName": fileName, "fileTitle": fileTitle, "fileDescription": fileDescription, "fileAssigned": fileAssigned, "fileDate": fileDate, "fileType": fileType, "fileSize": fileSize}]

    if(clickUploaderId != '' || clickUploaderId != null){

      dispatch(DownloadScreenAction(downloadDetails))

      if(isOpened == 'New'){
        axios.get(`http://localhost:5000/api/userFileBadgeUpdate?uploaderid=${clickUploaderId}`)
        .then(respons => {
            setTimeout(() => {
              hanldeOpenDownloadScreen();
            },300)
        })
        .catch(error => {
          setOpen(true)
        })
      }else{
        hanldeOpenDownloadScreen();
      }
    
    }else{

      setOpen(true)

    }
  }

  const hanldeOpenDownloadScreen = () => {

    setLoadBar(true)
    setTimeout(() => {
      setLoadBar(false)
      navigate('/fileDownloader')
    }, 800);

  }

  const hanldeDelete = (clickUploaderId) => {

    axios.get(`http://localhost:5000/api/userFileStatusUpdate?uploaderid=${clickUploaderId}`)
    .then(respons => {
      setAlertMsg({"success": "Deleted Successful"})
        setLoadBar(true)
        handleFileOption('My Files')
        setTimeout(() => {
          setLoadBar(false)
        },500)
    })
    .catch(error => {
      setAlertMsg({"success": "Deleted unSuccessful"})
      setLoadBar(true)
      setTimeout(() => {
        setOpen(true)
        setLoadBar(false)
      },500)
    })

  }

  React.useEffect(() => {
    setTimeout(() => {
      setFetching(false)
    }, 2000)
  },[fileData])

  return (<>
        {<DialogBox open={open} handleClose={handleClose} alertMsg={alertMsg}/>}
    {!fileData || [...fileData].length == 0 ? <><NoDataFound/></> 
      : <>{fetching ? <><FetchingData fetching={fetching}/></> 
              : <>
                  <Box sx={{ flexGrow: 1, overflow: 'hidden', px: 3, width: '90vw' }}>
                    {[...fileData].sort((a,b) => parseInt(b.uploaderid) - parseInt(a.uploaderid)).filter((fil) => {
                      return JSON.stringify(fil.userdoclabel).includes(filterData) || JSON.stringify(fil.date).includes(filterData) || JSON.stringify(fil.size).includes(filterData) || JSON.stringify(fil.filetype).includes(filterData) || JSON.stringify(fil.uploaderid).includes(filterData) || JSON.stringify(fil.userid).includes(filterData) || JSON.stringify(fil.userfilename).includes(filterData)
                    }).map((res, i) => {
                      return <>
                        <Item sx={{ my: 1, mx: 'auto', p: 2,}}>
                          <Stack spacing={2} direction="row" alignItems="left">
                          <Badge color="secondary" badgeContent={res.isOpened}>
                            <img src={process.env.PUBLIC_URL + `/${res.filetype}.png`} alt='file'/>
                          </Badge>
                            <div style={{width: '40vw'}}>
                              <Typography sx={{ fontWeight: 'bold', textAlign: 'left' }} noWrap>File Name: {res.userdoclabel}</Typography>
                              <Typography noWrap>{res.userdescription}</Typography>
                            </div>
                            <div style={{width: '15vw'}}>
                              <Typography sx={{ fontWeight: 'bold', textAlign: 'center' }} noWrap>Uploade Date:</Typography>
                              <Typography noWrap sx={{ textAlign: 'center' }}>{res.date}</Typography>
                            </div>
                            <div style={{width: '15vw'}}>
                              <Typography sx={{ fontWeight: 'bold', textAlign: 'center' }} noWrap>Size:</Typography>
                              <Typography noWrap sx={{ textAlign: 'center' }}>{res.size}kb</Typography>
                            </div>
                            <Button endIcon={<Send />} onClick={() => {hanldeUpdateBadge(res.uploaderid, res.userid, res.userfilename, res.userdoclabel, res.userdescription, res.assigned, res.date, res.filetype, res.size, res.isOpened)}} color="success">Open</Button>
                            {res.userid == CurrentUserReducer ? <><Button endIcon={<Delete />} onClick={() => {hanldeDelete(res.uploaderid)}} color="warning"></Button></> : <></>}
                            {/* <div style={{paddingTop: '2vh'}}>
                              <IconButton><MoreVert /></IconButton>
                              <MoreVert />
                            </div> */}
                          </Stack>
                        </Item>
                      </>
                    })}
                  </Box>
              </>}
      </>}
    </>);
}
