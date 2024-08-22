import React, { useState } from 'react';
import { Button, Card, CardContent, CardHeader, TextField, Typography } from '@mui/material';
import { SysDate } from '../../Test/FunctionalComponents';
import { PaperInputTag } from '../../ReactTag/PaperInputTag';
import { Save } from '@mui/icons-material';
import PaperDialogBox from '../PaperDialogBox';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ConfigPaperList = ({ setLoadBar }) => {

    const [paperID,setPaperID] = useState('')
    const [paperName,setPaperName] = useState('')
    const [paperType,setPaperType] = useState([])
    const [paperOrganization,setPaperOrganization] = useState([])
    const [paperValidation,setPaperValidation] = useState([])

    const [open,setOpen] = useState(false)
    const [paperMsg,setPaperMsg] = useState([])

    const userId = useSelector((state) => state.CurrentUserReducer)
    const navigate = useNavigate()

    const handlePaperID = (event) => {
        setPaperID(event.target.value)
    }

    const handlePaperName = (event) => {
        setPaperName(event.target.value)
    }

    const handlePaperCreation = () => {
        if(paperID != '' && paperName != '' && paperType != [] && paperOrganization != [] && paperValidation != []){

            let paperForm = [{paperid: paperID, papername: paperName, papertype: paperType[0], paperorg: paperOrganization[0], paperactive: paperValidation[0], createdby: userId}]

            axios.post(`http://localhost:5000/api/sendPaperFormData`, paperForm)
            .then(respons => {
                setPaperMsg({"success": [respons.data][0].message})
                setLoadBar(true)
                setTimeout(() => {
                    setOpen(true)
                    setLoadBar(false)
                }, 800);
            })
            .catch(error => {
                setPaperMsg({"error": error.message})
                setLoadBar(true)
                setTimeout(() => {
                    setOpen(true)
                    setLoadBar(false)
                }, 800);
            })

        }else{
            setPaperMsg({"error": "Kinldy fill all the Mandatory fileds."})
                setLoadBar(true)
                setTimeout(() => {
                    setOpen(true)
                    setLoadBar(false)
                }, 500);
        }

    }

    const handleClose = () => {
        setOpen(false)
        if(JSON.stringify(paperMsg).includes('success')){
            setLoadBar(true)
            setTimeout(() => {
                setLoadBar(false)
                navigate('/paperList')
            }, 500);
        }
    }

  return (
    <>
    <div style={{paddingTop: '5vh', paddingLeft: '2vh', backgroundColor: '',}}>
        <PaperDialogBox open={open} paperDetails={paperMsg} handleClose={handleClose}/>
        <Card sx={{width: '220vh', height: '82vh', border: '2px solid #e0e0e0', boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.5)'}}>
            <CardHeader style={{backgroundColor: 'white', color: 'black'}} sx={{ textAlign: 'left', height: '25px' }} title={<Typography variant="h5" sx={{ fontWeight: 'bold', textAlign: 'left' }}>Paper Creation</Typography>} subheader={<Typography variant="h7" sx={{ fontWeight: 'bold', textAlign: 'left' }}>{<SysDate/>}</Typography>}/>
            <CardContent style={{backgroundColor: 'white'}}>
                <div style={{display: 'flex'}}>
                <div style={{flex: '70%', border: ''}}>
                <div style={{height: '67vh', backgroundColor: '', overflow: 'auto', display: 'flex', flexDirection: 'row'}}>
                  <div>
                  <form style={{paddingLeft: '8vw'}}>
                    <div style={{ width: '40vw', height: '40px', display: 'flex', gap: '15vh', alignItems: 'flex-start'}}>
                    <Typography variant="h5" sx={{ fontWeight: '', textAlign: 'left' }}>PaperID:<span style={{color: 'red'}}>*</span></Typography>
                    <TextField fullWidth inputProps={{maxLength: 10}} value={paperID} onChange={(event) => handlePaperID(event)} />
                    </div>
                    <div style={{ width: '40vw', height: '40px', paddingTop: '6vh', display: 'flex', gap: '8vh', alignItems: 'flex-start' }}>
                    <Typography variant="h5" sx={{ fontWeight: '', textAlign: 'left' }}>PaperName:<span style={{color: 'red'}}>*</span></Typography>
                    <TextField fullWidth inputProps={{maxLength: 35}} value={paperName} onChange={(event) => handlePaperName(event)}/>
                    </div>
                    <div style={{ width: '30vw', height: '40px', display: 'flex', gap: '20vh', alignItems: 'flex-start', paddingTop: '6vh'}}>
                    <Typography variant="h5" sx={{ fontWeight: '', textAlign: 'left' }}>Type:<span style={{color: 'red'}}>*</span></Typography>
                        <PaperInputTag optionType={'type'} assignedUser={paperType} setAssignedUser={setPaperType}/>
                    </div>
                    <div style={{ width: '35vw', height: '40px', display: 'flex', gap: '6vh', alignItems: 'flex-start', paddingTop: '3vh'}}>
                    <Typography variant="h5" sx={{ fontWeight: '', textAlign: 'left' }}>Organization:<span style={{color: 'red'}}>*</span></Typography>
                        <PaperInputTag optionType={'organization'} assignedUser={paperOrganization} setAssignedUser={setPaperOrganization}/>
                    </div>
                    <div style={{ width: '30vw', height: '40px', display: 'flex', gap: '10.4vh', alignItems: 'flex-start', paddingTop: '3vh'}}>
                    <Typography variant="h5" sx={{ fontWeight: '', textAlign: 'left' }}>Validation:<span style={{color: 'red'}}>*</span></Typography>
                        <PaperInputTag optionType={'validation'} assignedUser={paperValidation} setAssignedUser={setPaperValidation}/>
                    </div>
                    <div style={{padding: '3vh', paddingTop: '2.5vh', paddingLeft: '35vw'}}>{(<Button variant="contained" color="secondary" startIcon={<Save />} onClick={handlePaperCreation}>Create Paper</Button>)}</div>
                  </form>
                  </div>
                  </div>
                  </div>
                  <div style={{flex: '30%', backgroundColor: 'white', borderRadius: '20px'}}>
                        <img src={process.env.PUBLIC_URL + `/paperConf.png`} alt='file' style={{paddingTop: '10vh'}}/>
                  </div>
                </div>
            </CardContent>
        </Card>
    </div>
    </>
  )
}

export default ConfigPaperList