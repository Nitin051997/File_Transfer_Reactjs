import React, { useEffect } from 'react';
import { Card, CardContent, CardHeader, TextField, Typography } from '@mui/material';
import FileDownloadButton from './FileDownloadButton';
import { useSelector } from 'react-redux';
import { ArrowBack } from '@mui/icons-material';
import { SysDate } from '../Test/FunctionalComponents';

const Downloader = () => {

  const DownloadScreenReducer = useSelector((state) => state.DownloadScreenReducer)

  return (<>{!DownloadScreenReducer ? <></> 
        : <>
            <div style={{paddingTop: '5vh', paddingLeft: '2vh', backgroundColor: '',}}>
                <Card sx={{width: '220vh', height: '82vh', border: '2px solid #e0e0e0', boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.5)'}}>
                    <CardHeader style={{backgroundColor: '#ffc04c', color: 'balck'}} sx={{ textAlign: 'left', height: '25px' }} title={<><Typography variant="h4" sx={{ fontWeight: 'bold', textAlign: 'center'}}><span style={{fontSize: '25px'}}>File:- </span>{DownloadScreenReducer[0].fileTitle}</Typography></>} />
                    <CardContent style={{backgroundColor: '#ffedcc'}}>
                      <div style={{display: 'flex'}}>
                        <div style={{flex: '70%', border: ''}}>
                        <div style={{height: '67vh', backgroundColor: '', overflow: 'auto', display: 'flex', flexDirection: 'row'}}>
                        <div>
                          <form style={{paddingLeft: '8vw'}}>
                            <div style={{ width: '50vw', height: '40px', paddingTop: '6vh', display: 'flex', gap: '4.5vh', alignItems: 'flex-start' }}>
                            <Typography variant="h5" sx={{ fontWeight: '', textAlign: 'left' }}>Description:</Typography>
                            <TextField value={`${DownloadScreenReducer[0].fileDescription}`}  fullWidth multiline rows={4} inputProps={{maxLength: 200}} />
                            </div>
                            <div style={{ width: '40vw', height: '40px', display: 'flex', gap: '10.8vh', alignItems: 'flex-start', paddingTop: '18vh'}}>
                            <Typography variant="h5" sx={{ fontWeight: '', textAlign: 'left' }}>Assigned User:</Typography>
                            <TextField value={`${JSON.parse(DownloadScreenReducer[0].fileAssigned)}`}  fullWidth inputProps={{maxLength: 36}} />
                            </div>
                            <div style={{ width: '40vw', height: '40px', display: 'flex', gap: '10.8vh', alignItems: 'flex-start', paddingTop: '8vh'}}>
                            <Typography variant="h5" sx={{ fontWeight: '', textAlign: 'left', flexDirection: 'row',  fontFamily: 'monospace' }}>Uploaded By:  <span style={{color: 'black', fontWeight: 'bold'}}>  {DownloadScreenReducer[0].path}</span></Typography>
                            </div>
                            <div style={{ width: '40vw', height: '40px', display: 'flex', gap: '10.8vh', alignItems: 'flex-start', paddingTop: '1vh'}}>
                            <Typography variant="h5" sx={{ fontWeight: '', textAlign: 'left', flexDirection: 'row',  fontFamily: 'monospace' }}>Uploaded On: <span style={{color: 'black', fontWeight: 'bold'}}>  {DownloadScreenReducer[0].fileDate}</span></Typography>
                            </div>
                          </form>
                          </div>
                        </div>
                        </div>
                        <div style={{flex: '30%', border: '2px solid #e0e0e0', boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.5)', backgroundColor: 'white', borderRadius: '20px'}}>
                        <img src={process.env.PUBLIC_URL + `/240Download.png`} style={{width: '15vw', height: '35vh', paddingTop: '5vh'}} alt='file'/>
                        <Typography variant="h5" sx={{ fontWeight: '', textAlign: 'center', flexDirection: 'row' }}>Size: <b>{DownloadScreenReducer[0].fileSize}Kb</b></Typography>
                        <div style={{paddingTop: '5vh'}}>
                          <FileDownloadButton path={DownloadScreenReducer[0].path} fileName={DownloadScreenReducer[0].fileName} imageName={DownloadScreenReducer[0].fileType}/>
                        </div>
                        </div>
                      </div>
                    </CardContent>
                </Card>
            </div>
        </>}</>
  )
}

export default Downloader