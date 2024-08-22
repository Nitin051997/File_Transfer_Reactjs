import React, { useEffect, useState } from 'react'
import FormSection from './ConfSection/FormSection'
import { Fab, Typography } from '@mui/material'
import { Add } from '@mui/icons-material'
import { useSelector } from 'react-redux'

const FormConfigurationScreen = () => {

    const [confSection, setConfSection] = useState([])

    const ConfFormSreenSectionReducer = useSelector((state) => state.ConfFormSreenSectionReducer)
    const PaperConfScreenReducer = useSelector((state) => state.PaperConfScreenReducer)

    const handleAddSection = () => {
        setConfSection((old) => {
            return [...old,{sysUniqueId: `sysSection ${confSection.length + 1}`, sectionData: ConfFormSreenSectionReducer, ...PaperConfScreenReducer[0]}]
        })
    }

    useEffect(() => {
        setConfSection([{sysUniqueId: `sysSection ${confSection.length + 1}`, sectionData: ConfFormSreenSectionReducer, ...PaperConfScreenReducer[0]}])
    },[ConfFormSreenSectionReducer])

  return (
    <>
    <div style={{display: 'flex', height: '88vh', paddingTop: '0.8vh'}}>
        <div style={{flex: '20%', backgroundColor: '#dfe3ee', overflow: 'auto', scrollbarWidth: 'none', scrollBehavior: 'smooth', alignItems: 'center', justifyContent: 'flex-start', display: 'flex', flexDirection: 'column', paddingTop: '1%'}}>
            <div style={{paddingBottom: '6%', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                <Typography noWrap style={{textTransform: 'none', width: '15vw', height: '8vh', fontSize: '25px', borderRadius: '6px'}}>Form Config</Typography>
                <Fab variant='contained' size='small' color='secondary' onClick={() => {handleAddSection()}}><Add/></Fab>
            </div>
            {confSection.map((resSection) => {
                return <><FormSection sectionData={resSection}/></>
            })}
        </div>
        <div style={{flex: '50%', backgroundColor: 'yellow'}}><p>Yellow</p></div>
        <div style={{flex: '30%', backgroundColor: 'blue'}}><p>Blue</p></div>
    </div>
    </>
  )
}

export default FormConfigurationScreen