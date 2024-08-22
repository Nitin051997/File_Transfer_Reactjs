import { Card, CardContent, CardHeader, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { SysDate } from '../Test/FunctionalComponents'
import axios from 'axios'
import { useSelector } from 'react-redux'
import SearchPaperList from './SearchPaperList'
import CreatePaperList from './Conf/CreatePaperList'
import PaperList from './PaperList'

const ListUserPaper = ({ setLoadBar }) => {

    const userID = useSelector((state) => state.CurrentUserReducer)

    const [paperData,setPaperData] = useState(false)
    const [filterData,setFilterData] = useState('')

    const handleFilterData = (e) => {
        setFilterData(e.target.value)
    }

    useEffect(() => {

        axios.get(`http://localhost:5000/api/paperFormData`)
        .then(response => {
            setPaperData(response.data)
        })
        .catch(error => {
            setPaperData(false)
        });

      },[])

  return (<>
    <div style={{paddingTop: '5vh', paddingLeft: '2vh', backgroundColor: '',}}>
        <Card sx={{width: '220vh', height: '82vh', border: '2px solid #e0e0e0', boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.5)'}}>
            <CardHeader style={{backgroundColor: '#2c4c9c', color: '#d5dbeb'}} sx={{ textAlign: 'left', height: '25px' }} title={<Typography variant="h5" sx={{ fontWeight: 'bold', textAlign: 'left' }}>Paper Files</Typography>} subheader={<div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', height: '14px'}}><Typography variant="h7" sx={{ fontWeight: 'bold', textAlign: 'left', color: '#d5dbeb' }}>{<SysDate/>}</Typography><div style={{ paddingLeft: '126vh', paddingBottom: '5.5vh' }}><div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center'}} ><CreatePaperList setLoadBar={setLoadBar}/><SearchPaperList handleFilterData={handleFilterData}/></div></div></div>}/>
            <CardContent style={{backgroundColor: '	#d5dbeb'}}>
                <div style={{height: '67vh', backgroundColor: '', overflow: 'auto', scrollbarWidth: 'none'}}>
                    <PaperList paperData={paperData ? [...paperData].sort((a, b) => {
                            return parseInt(b.syspaperid.split('-')[1]) - parseInt(a.syspaperid.split('-')[1]);
                        }) : []} filterData={filterData} setLoadBar={setLoadBar}/>
                </div>
            </CardContent>
        </Card>
    </div>
  </>)
}

export default ListUserPaper