import React, { useState } from 'react';
import axios from 'axios';
import { Button, Card, CardContent, CardHeader, TextField, Typography } from '@mui/material';
import { SysDate } from '../Test/FunctionalComponents';
import { CloudUpload } from '@mui/icons-material';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ReactInputTag } from '../ReactTag/ReactInputTag';
import DialogBox from './DialogBox';

const Uploader = ({ setLoadBar }) => {

  const [file, setFile] = useState(null);
  const [fileLabel,setFileLabel] = useState('')
  const [fileComment,setFileComment] = useState('')
  const [fileUpload,setFileUpload] = useState([])
  const [open,setOpen] = useState(false)
  const [openData,setOpenData] = useState(false)
  const [assignedUser, setAssignedUser] = useState([]);

  let checkFileType = [{"checkVal": ".pdf", "storeVal": "pdf"},{"checkVal": ".docx", "storeVal": "word"},{"checkVal": ".xls", "storeVal": "excel"},{"checkVal": ".zip", "storeVal": "zip"},{"checkVal": ".mp3", "storeVal": "audio"},{"checkVal": ".mp4", "storeVal": "video"},{"checkVal": ".txt", "storeVal": "note"},{"checkVal": ".jpg", "storeVal": "jpg"},{"checkVal": ".png", "storeVal": "jpg"},{"checkVal": ".java", "storeVal": "java"},{"checkVal": ".js", "storeVal": "js"},{"checkVal": ".html", "storeVal": "html"},{"checkVal": ".css", "storeVal": "css"}];

  const navigate = useNavigate()

  const CurrentUserReducer = useSelector((state) => state.CurrentUserReducer)

  const handleFileChange = (e) => {
    setFile(e.target.files[0])
  };

  const handleFileLabel = (e) => {
    setFileLabel(e.target.value)
  }

  const handleFileComment = (e) => {
    setFileComment(e.target.value)
  }

  // const handleRemove = () => {
  //   setFile(null)
  // }

  const handleDataClose = () => {
    if(JSON.stringify(fileUpload).includes('success')){
      setLoadBar(true)
      setTimeout(() => {
        setOpenData(false)
          setLoadBar(false)
          navigate('/Home')
      }, 500);
    }else{
      setLoadBar(true)
      setTimeout(() => {
        setOpenData(false)
          setLoadBar(false)
      }, 500);
    }
  }

  const handleClose = async () => {
    setOpen(false)
    if(JSON.stringify(fileUpload).includes('success')){

      let fileType = ''
      let fileData = [{"userid": CurrentUserReducer, "userdoclabel": fileLabel, "userdescription": fileComment, "size": fileUpload.success[0].size, "filepath": fileUpload.success[0].path, "isOpened": "New", "assigned": assignedUser, "filetype": 
            checkFileType.filter((fil) => {
              if(JSON.stringify(fileUpload.success[0].path).includes(fil.checkVal)){
                fileType = fil.storeVal
                  return fil.storeVal
              }
          }).length == 0 ? 'other' : fileType, "userfilename": fileUpload.success[0].filename, "inuse": "Yes" }
        ]

      axios.post(`http://localhost:5000/api/sendUserFileDetails`, fileData)
      .then(respons => {
        setFileUpload({"success": [respons.data][0].message})
        setLoadBar(true)
        setTimeout(() => {
          setOpenData(true)
            setLoadBar(false)
        }, 800);
      })
      .catch(error => {
        setFileUpload({"error": error.message})
        setLoadBar(true)
        setTimeout(() => {
          setOpenData(true)
            setLoadBar(false)
        }, 800);
      })

    }else if(JSON.stringify(fileUpload).includes('Kinldy fill all the Mandatory fileds')){
      setLoadBar(true)
      setTimeout(() => {
          setLoadBar(false)
      }, 100);
    }else{
      setFileUpload({"error": "ERROR! unSuccessful File & it's details not added!"})
      setLoadBar(true)
      setTimeout(() => {
        setOpenData(true)
          setLoadBar(false)
      }, 800);
    }

  }

  const handleUpload = async () => {
    if( file != null && fileLabel != '' && fileComment != ''){
      try {

        const formData = new FormData();
        formData.append('file', file);

        const response = await axios.post('http://localhost:5000/api/uploader', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
            'userID': CurrentUserReducer
          }
        });

        response.data.userid = CurrentUserReducer;
        setFileUpload({"success": [response.data]})
        setLoadBar(true)
        setTimeout(() => {
          setOpen(true)
            setLoadBar(false)
        }, 800);

      } catch (error) {

        setFileUpload({"error": "File upload unSuccessful"})
        setLoadBar(true)
        setTimeout(() => {
          setOpen(true)
            setLoadBar(false)
        }, 800);

      }
    }else{
      setFileUpload({"error": "Kinldy fill all the Mandatory fileds."})
      setLoadBar(true)
      setTimeout(() => {
        setOpen(true)
          setLoadBar(false)
      }, 300);
    }
  };

  return (
    <div style={{paddingTop: '5vh', paddingLeft: '2vh', backgroundColor: '',}}>
      <DialogBox open={open} openData={openData} handleClose={handleClose} handleDataClose={handleDataClose} fileUpload={fileUpload}/>
        <Card sx={{width: '220vh', height: '82vh', border: '2px solid #e0e0e0', boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.5)'}}>
            <CardHeader style={{backgroundColor: '#7be382', color: 'black'}} sx={{ textAlign: 'left', height: '25px' }} title={<Typography variant="h5" sx={{ fontWeight: 'bold', textAlign: 'left' }}>File Uploader</Typography>} subheader={<Typography variant="h7" sx={{ fontWeight: 'bold', textAlign: 'left' }}>{<SysDate/>}</Typography>}/>
            <CardContent style={{backgroundColor: '#dcffeb'}}>
                <div style={{display: 'flex'}}>
                <div style={{flex: '70%', border: ''}}>
                <div style={{height: '67vh', backgroundColor: '', overflow: 'auto', display: 'flex', flexDirection: 'row'}}>
                  <div>
                  <form style={{paddingLeft: '8vw'}}>
                    <div style={{ width: '40vw', height: '40px', display: 'flex', gap: '8vh', alignItems: 'flex-start'}}>
                    <Typography variant="h5" sx={{ fontWeight: '', textAlign: 'left' }}>FileName:<span style={{color: 'red'}}>*</span></Typography>
                    <TextField fullWidth inputProps={{maxLength: 36}} value={fileLabel} onChange={(e) => handleFileLabel(e)}/>
                    </div>
                    <div style={{ width: '50vw', height: '40px', paddingTop: '6vh', display: 'flex', gap: '4.5vh', alignItems: 'flex-start' }}>
                    <Typography variant="h5" sx={{ fontWeight: '', textAlign: 'left' }}>Description:<span style={{color: 'red'}}>*</span></Typography>
                    <TextField fullWidth multiline rows={4} inputProps={{maxLength: 200}} value={fileComment} onChange={(e) => handleFileComment(e)}/>
                    </div>
                    <div style={{ width: '40vw', height: '40px', display: 'flex', gap: '10.8vh', alignItems: 'flex-start', paddingTop: '18vh'}}>
                    <Typography variant="h5" sx={{ fontWeight: '', textAlign: 'left' }}>SendTo:<span style={{color: 'red'}}>*</span></Typography>
                      <ReactInputTag assignedUser={assignedUser} setAssignedUser={setAssignedUser}/>
                    </div>
                    <div style={{ width: '60vw', height: '40px', paddingTop: '5.5vh', paddingLeft: '', display: 'flex', gap: '', alignItems: 'flex-start'}}>
                    <TextField type='file' name='file' onChange={handleFileChange} InputLabelProps={{ shrink: true }} /><Typography variant="h5" sx={{ fontWeight: '', textAlign: 'left' }}><span style={{color: 'red'}}>*</span></Typography>
                    <div style={{padding: '10vh', paddingTop: '1.7vh'}}>{file&& (<Button variant="contained" color="secondary" startIcon={<CloudUpload />} onClick={handleUpload}>Upload</Button>)}</div>
                    </div>
                    {/* <div style={{ paddingTop: '6vh', paddingLeft: '65vh', display: 'flex', gap: '', alignItems: 'flex-start'}}>
                    <Button variant="contained" color="error" startIcon={<Delete />} onClick={handleRemove} >Remove</Button>
                    </div> //26.9vh*/}
                  </form>
                  </div>
                  </div>
                  </div>
                  {/* <div style={{flex: '30%', border: '2px solid #e0e0e0', boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.5)', backgroundColor: 'white', borderRadius: '20px'}}> */}
                  <div style={{flex: '30%', backgroundColor: '#dcffeb', borderRadius: '20px'}}>
                        <img src={process.env.PUBLIC_URL + `/240Uploader.png`} alt='file' style={{paddingTop: '10vh'}}/>
                  </div>
                </div>
            </CardContent>
        </Card>
    </div>
  );
};

export default Uploader;
