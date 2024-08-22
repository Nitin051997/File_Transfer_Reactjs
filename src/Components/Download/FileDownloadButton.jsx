import { Button } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import DialogBox from './DialogBox';

const FileDownloadButton = ({ path, fileName, imageName }) => {

  const [open,setOpen] = useState(false)

  const handleClose = () => {
    setOpen(false)
  }

  const handleDownload = () => {

    if(path != '' && fileName != '' && fileName != null){

      axios.get(`http://localhost:5000/api/userFileDownload?ownerName=${path}&fileName=${fileName}`, { responseType: 'blob' } )
      .then(response => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', `${fileName}`);
        document.body.appendChild(link);
        link.click();
      })
      .catch(error => {
        setOpen(true)
      });

    }else{

      setOpen(true)

    }
  };

  return (
    <>
      {<DialogBox open={open} handleClose={handleClose}/>}
      <Button style={{textTransform: 'none', width: '20vw', height: '10vh', fontSize: '25px', borderRadius: '30px'}} variant='outlined' color='success' onClick={handleDownload} startIcon={<img src={process.env.PUBLIC_URL + `/${imageName}.png`} alt='file'/>}> Download</Button>
    </>

  );
};

export default FileDownloadButton;
